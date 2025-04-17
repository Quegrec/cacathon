'use client'
import { useState } from "react";

type BeforeAfterCardProps = {
  beforeSrc: string;
  afterSrc: string;
};

export default function BeforeAfterCard({ beforeSrc, afterSrc }: BeforeAfterCardProps) {
  const [isBeforeMain, setIsBeforeMain] = useState(true);

  const mainImage = isBeforeMain ? beforeSrc : afterSrc;
  const cornerImage = isBeforeMain ? afterSrc : beforeSrc;

  const toggleImages = () => {
    setIsBeforeMain(!isBeforeMain);
  };

  return (
    <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden shadow-md">
      {/* Image principale */}
      <img
        src={mainImage}
        alt="Main"
        className="w-full h-full object-cover"
      />

      {/* Mini image dans le coin */}
      <div
        onClick={toggleImages}
        className="absolute top-2 right-2 w-20 h-28 border-2 border-white rounded-md overflow-hidden cursor-pointer shadow-lg"
      >
        <img
          src={cornerImage}
          alt="Miniature"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
