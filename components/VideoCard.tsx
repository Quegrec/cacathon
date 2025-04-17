import { truncate } from "@/utils/truncate";

type Props = {
  title: string;
  thumbnail: string;
  videoUrl: string;
};

export default function VideoCard({ title, thumbnail, videoUrl }: Props) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-[28.5vw] max-w-[28.5vw] flex-shrink-0"
    >
      <img src={thumbnail} alt={title} className="rounded-lg mb-2 w-full h-auto" />
      <h3 className="font-semibold text-sm">{truncate(title)}</h3>
    </a>

  );
}
