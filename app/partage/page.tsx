'use client'
import BottomNav from "@/components/BottomNav";
import Tabs from "@/components/Tabs";

export default function Partage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b text-xl font-semibold">Partager</header>

      <main className="flex-1 p-4 space-y-4">
        <Tabs options={["Tutos", "Photo", "Avant/Après Vidéo"]} />
        <div className="text-center text-gray-400">Zone de dépôt ou création à venir...</div>
      </main>

      <BottomNav />
    </div>
  );
}
