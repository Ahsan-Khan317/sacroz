import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const All= () => {
  const sliderRef = useRef(null);
const navigate = useNavigate()
  const products = [
    "https://www.sacrozindustries.com/slide-3.jpg",
    "https://www.sacrozindustries.com/slide-2.jpg",
    "https://www.sacrozindustries.com/slide-1.jpg",
    "https://www.sacrozindustries.com/slide-4.jpg",
    "https://www.sacrozindustries.com/slide-5.jpg",
    "https://www.sacrozindustries.com/images/IMG-20230923-WA0033.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMwf5ukv6uSdhbKsDxZaingKcWUmMRkztCw&s",
    "https://www.jiomart.com/images/product/original/rvagazbryu/plantex-two-way-tap-for-washing-machine-quarter-turn-2-way-bibcock-water-tap-washbasin-tap-with-wall-flange-teflon-tape-bathroom-tap-smr-1265-chrome-product-images-orvagazbryu-p609598279-6-202407301124.jpg?im=Resize=(420,420)",
    "https://www.sacrozindustries.com/images/IMG-20230923-WA0060.jpg",
 
  ];

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 280; // card width + gap

    if (direction === "left") {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-14  relative">
      {/* Heading */}
      <div className="px-6 md:px-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          All Products
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our complete premium product range
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full hover:bg-black hover:text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-6 md:px-12 no-scrollbar"
      >
        {products.map((img, index) => (
          <div
          onClick={()=>{
            navigate("/products")
          }}
            key={index}
            className="min-w-60 h-90 rounded-2xl overflow-hidden shadow-md bg-white group"
          >
            <img
              src={img}
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full hover:bg-black hover:text-white transition"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default All;
