import React, { useRef } from "react";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";

type Props = {
  children: React.ReactNode;
};

export default function CustomSlider({ children }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth / 1.5;
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth / 1.5;
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute left-0 h-full flex items-center justify-start">
        <button
          type="button"
          className="bg-blue-200 shadow hover:bg-blue-500 hover:text-white text-primary-600 border border-blue-600 rounded-full"
          onClick={handleScrollLeft}
        >
          <ArrowBack classNames="w-8 h-8" />
        </button>
      </div>
      <div className="absolute right-0 h-full flex items-center justify-start">
        <button
          type="button"
          className="bg-blue-200 shadow hover:bg-blue-500 hover:text-white text-primary-600 border border-blue-600 rounded-full"
          onClick={handleScrollRight}
        >
          <ArrowNext classNames="w-8 h-8" />
        </button>
      </div>
      <div className="px-12">
        <div
          className="w-full flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide scroll-smooth p-2 bg-gray-10"
          ref={sliderRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
