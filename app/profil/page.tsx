'use client'
import BottomNav from "@/components/BottomNav";

export default function Profil() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b text-xl font-semibold">Profil</header>

      <main className="flex-1 p-4">
        <div className="text-center text-gray-500">
          Profil utilisateur en construction.
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
