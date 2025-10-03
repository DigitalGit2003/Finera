import React, { useEffect, useState } from "react";

const images = [
  "/tech1.jpg",
  "/tech2.jpg",
  "/tech3.jpg"
];

const RotatingBackgroundSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default RotatingBackgroundSection;
