import Image from "next/image";

export default function Header() {
    return (
      <header className="p-4 flex items-center justify-between border-b">
        <h1 className="text-lg font-bold">
            <Image src="/RE_act-B.svg" alt="Logo" width={40} height={40} className="inline-block mr-2" />
        </h1>
        <div className="flex items-center space-x-4">
          <button title="Recherche" className="w-6 h-6 bg-gray-200 rounded-full">
            <Image src="/search.png" alt="Search" width={24} height={24} className="w-full h-full" />
          </button>
          <button title="Menu burger" className="w-6 h-6 bg-gray-200 rounded-full" >
            <Image src="/burger.svg" alt="menu" width={24} height={24} className="w-full h-full" />
          </button>
        </div>
      </header>
    );
  }
  