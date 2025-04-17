'use client'
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import VideoCard from "@/components/VideoCard";
import Tabs from "@/components/Tabs";
import { videos } from "@/mocks/videos";

export default function Tutos() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-4 space-y-4">
        <Tabs options={["Tous", "Faciles", "Tendances", "Du moment"]} />

        <section className="grid grid-cols-2 gap-4">
           {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
