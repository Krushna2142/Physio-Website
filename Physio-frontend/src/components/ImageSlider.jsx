import React, { useEffect, useState } from "react";

const images = [
    "./images/physio1.jpg",
    "./images/physio2.jpg",
    "./images/physio3.jpg",
    "./images/physio4.jpg",
    "./images/pexels1.jpg",
    "./images/pexels2.jpg", 
    "./images/pexels3.jpg",
    "./images/pexels4.jpg",
    "./images/pexels5.jpg",
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
