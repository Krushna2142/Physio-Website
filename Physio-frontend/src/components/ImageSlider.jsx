import React, { useEffect, useState } from "react";

const images = [
    "./images/physio1.webp",
    "./images/physio2.webp",
    "./images/physio3.webp",
    "./images/physio4.webp",
    "./images/pexels1.webp",
    "./images/pexels2.webp", 
    "./images/pexels3.webp",
    "./images/pexels4.webp",
    "./images/pexels5.webp",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-lg ">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
}
