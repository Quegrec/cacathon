"use client";

import { useEffect, useRef, useState } from "react";

export default function CameraStudio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<"photo" | "video">("photo");
  const [error, setError] = useState<string | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);

  // Init cam
  useEffect(() => {
    async function initCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // Video recorder setup
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) recordedChunks.current.push(e.data);
        };
        recorder.onstop = () => {
          const blob = new Blob(recordedChunks.current, { type: "video/webm" });
          setVideoURL(URL.createObjectURL(blob));
          recordedChunks.current = [];
        };

        mediaRecorder.current = recorder;
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError("Erreur d’accès à la caméra : " + err.message);
        } else {
          setError("Erreur d’accès à la caméra : Une erreur inconnue s'est produite.");
        }
      }
    }

    initCamera();
  }, []);

  // Photo
  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d")?.drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL("image/png");
      setImageDataUrl(dataUrl);
      setVideoURL(null); // Reset video
    }
  };

  // Video
  const startRecording = () => {
    setRecording(true);
    recordedChunks.current = [];
    mediaRecorder.current?.start();
    setImageDataUrl(null); // Reset image
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorder.current?.stop();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {error && <p className="text-red-500">{error}</p>}

      <video ref={videoRef} autoPlay playsInline muted className="rounded-lg max-w-md" />
      <canvas ref={canvasRef} className="hidden" />

      <div className="flex gap-2">
        <button
          onClick={() => setMode("photo")}
          className={`px-3 py-1 rounded-full ${
            mode === "photo" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Mode Photo
        </button>
        <button
          onClick={() => setMode("video")}
          className={`px-3 py-1 rounded-full ${
            mode === "video" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Mode Vidéo
        </button>
      </div>

      {mode === "photo" && (
        <button onClick={takePhoto} className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Prendre une photo
        </button>
      )}

      {mode === "video" && (
        <div className="flex gap-4">
          <button
            onClick={startRecording}
            disabled={recording}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Démarrer
          </button>
          <button
            onClick={stopRecording}
            disabled={!recording}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Arrêter
          </button>
        </div>
      )}

      {/* Result */}
      {imageDataUrl && (
        <div className="flex flex-col items-center gap-2">
          <img src={imageDataUrl} alt="Photo capturée" className="rounded-lg max-w-md" />
          <a href={imageDataUrl} download="photo.png" className="text-blue-500 underline">
            Télécharger la photo
          </a>
        </div>
      )}

      {videoURL && (
        <div className="flex flex-col items-center gap-2">
          <video src={videoURL} controls className="rounded-lg max-w-md" />
          <a href={videoURL} download="video.webm" className="text-blue-500 underline">
            Télécharger la vidéo
          </a>
        </div>
      )}
    </div>
  );
}
