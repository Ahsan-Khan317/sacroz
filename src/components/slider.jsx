import { useEffect, useState } from "react";

const ImageSlider = ({ image }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [image.length]);

  return (
    <div
      className="
        relative w-full overflow-hidden rounded-2xl
        h-110
        sm:h-105
        md:h-150
        lg:h-[88vh]
        xl:h-[88vh]
        shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-linear-to-t before:from-black/30 before:to-transparent
        before:z-10
      "
    >
      {image.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-0" : "opacity-0"}
          `}
        >
          {/* Image */}
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute bottom-15 left-3 sm:left-7  z-20 max-w-xxl">
            <h2 className="text-white text-shadow-2xs shadow-amber-300 text-[25px] sm:text-3xl md:text-5xl font-bold leading-8 sm:leading-16 wrap-normal tracking-widest">
              Designed for Comfort.
              <br />
              Crafted for Style.
            </h2>

          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {image.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${
                idx === current
                  ? "bg-white scale-125 shadow-md"
                  : "bg-white/50 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
