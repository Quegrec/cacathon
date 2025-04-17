'use client'
import BottomNav from "@/components/BottomNav";
import Tabs from "@/components/Tabs";
import CameraStudio from "@/components/CaméraStudio";

export default function Partage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b text-xl font-semibold">Partager</header>

      <main className="flex-1 p-4 space-y-4">
        <Tabs options={["Tutos", "Photo", "Avant/Après Vidéo"]} />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Prendre une photo</h1>
          <CameraStudio />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
