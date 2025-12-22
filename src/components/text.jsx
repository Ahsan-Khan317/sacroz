import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Interior Designer",
      feedback:
        "The product quality is exceptional — a perfect combination of design and durability.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ananya Singh",
      role: "Home Owner",
      feedback:
        "The elegant look and feel truly elevated my home bathroom aesthetics.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mohit Sharma",
      role: "Architect",
      feedback:
        "Perfect pieces for luxury projects — design and comfort go hand in hand.",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "Pooja Patel",
      role: "Builder",
      feedback:
        "High-quality finish and excellent client feedback every time.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  /* ---------------- Scroll Logic ---------------- */

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const cardWidth =
      sliderRef.current.firstChild.offsetWidth + 24;
    setActiveIndex(
      Math.round(sliderRef.current.scrollLeft / cardWidth)
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", handleScroll);

    // Prevent vertical scroll while swiping horizontally
    const preventVerticalScroll = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
      }
    };

    slider.addEventListener("wheel", preventVerticalScroll, {
      passive: false,
    });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      slider.removeEventListener("wheel", preventVerticalScroll);
    };
  }, []);

  const scroll = (dir) => {
    const cardWidth =
      sliderRef.current.firstChild.offsetWidth + 24;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollTo = (i) => {
    const cardWidth =
      sliderRef.current.firstChild.offsetWidth + 24;
    sliderRef.current.scrollTo({
      left: i * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-12 rounded-2xl md:py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-100 blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mt-2">
              What Our <span className="text-indigo-600">Customers</span> Say
            </h2>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll("left")} className="nav-btn">
              <ChevronLeft />
            </button>
            <button onClick={() => scroll("right")} className="nav-btn">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory
            no-scrollbar
            touch-pan-x overscroll-x-contain

            px-4 sm:px-0
            -mx-4 sm:mx-0
            pb-10
          "
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="
                snap-center
                select-none touch-manipulation

                min-w-[calc(100vw-2rem)]
                sm:min-w-[70vw]
                md:min-w-125

                bg-white
                rounded-[2.5rem]
                border border-slate-100
                shadow-[0_20px_45px_-15px_rgba(0,0,0,0.1)]
                p-6 sm:p-8 md:p-12
                flex flex-col justify-between
                relative overflow-hidden
              "
            >
              {/* Decorative Quote */}
              <Quote
                size={140}
                className="absolute -top-6 -right-6 text-slate-100"
              />

              <div className="relative z-10">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover ring-4 ring-indigo-50"
                  />
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                      {t.name}
                    </h3>
                    <p className="text-indigo-500 text-xs sm:text-sm font-semibold uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                  “{t.feedback}”
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-6 z-10">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => scrollTo(i)}
              animate={{
                width: activeIndex === i ? 36 : 10,
                backgroundColor:
                  activeIndex === i ? "#4f46e5" : "#cbd5e1",
              }}
              className="h-2 rounded-full"
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Utility Styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
        .nav-btn {
          padding: 1rem;
          border-radius: 1.25rem;
          background: white;
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
        }
        .nav-btn:hover {
          background: #4f46e5;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
