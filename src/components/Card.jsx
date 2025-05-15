"use client"
import Image from 'next/image';

const Card = ({ name, title, subtitle }) => {
  return (
    <div className="relative w-[300px] aspect-[3/2] border-4 border-[#5c6650] bg-white p-4 cursor-pointer transition-transform duration-200 hover:rotate-3 group">
      {/* Stacked effect */}
      <div className="absolute top-0 left-0 w-full h-full border-4 border-[#5c6650] bg-white -rotate-6 z-[-1] transition-transform duration-200 group-hover:-rotate-3" />
      <div className="absolute top-0 left-0 w-full h-full border-4 border-[#5c6650] bg-white rotate-6 z-[-1] transition-transform duration-200 group-hover:rotate-3" />

      {/* Image + Text */}
      <div className="flex flex-col items-center space-y-3">
        <div className="w-full aspect-square border-4 border-[#5c6650] bg-gray-200 relative">
          <Image
            src={`/images/${name}.png`} // make sure your images are in /public/images/
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-[#fe89aa]">{title}</p>
          <p className="text-sm text-[#5c6650]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
