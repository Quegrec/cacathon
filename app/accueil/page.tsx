import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import VideoCard from "@/components/VideoCard";
import ImageCard from "@/components/ImageCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">Tutos du moment</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Créations tendances</h2>
          <div className="grid grid-cols-2 gap-4">
            <ImageCard />
            <ImageCard />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Avant / Après - Émouvants</h2>
          <div className="grid grid-cols-2 gap-4">
            <BeforeAfterCard 
              beforeSrc="https://picsum.photos/200/300?random=1"
              afterSrc="https://picsum.photos/200/300?random=2"
            />
            <BeforeAfterCard 
              beforeSrc="https://picsum.photos/200/300?random=3"
              afterSrc="https://picsum.photos/200/300?random=4"
            />
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
