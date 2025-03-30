import { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    {
      src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png",
      alt: "game",
    },
    {
      src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png",
      alt: "vrbox",
    },
    {
      src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-16.png",
      alt: "laptop",
    },
    {
      src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png",
      alt: "VRBox",
    },
    {
      src: "https://cdn.flyonui.com/fy-assets/components/carousel/image-23.png",
      alt: "iwatch",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-8xl mx-auto overflow-hidden h-full">
      <div className="relative w-full h-96">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
}
