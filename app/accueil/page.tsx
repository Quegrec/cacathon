import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import VideoCard from "@/components/VideoCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import { videos } from "@/mocks/videos";
import { tendances } from "@/mocks/tendances";

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">Tutos du moment</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Réparations / Créations tendances</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {tendances.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
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
