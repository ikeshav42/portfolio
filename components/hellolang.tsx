"use client";
import { useState, useEffect } from "react";

const hellos = [
  "Hello",
  "Hola",
  "Namaste",
  "Bonjour",
  "Vanakkam",
  "Hallo",
  "こんにちは",
  "你好",
  "Ciao",
  "नमस्ते",
];

const HelloLanguages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hellos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex pb-4">
      {/* The key remounts the element on each change, which restarts the CSS animation. */}
      <div key={currentIndex} className="greeting text-4xl font-bold">
        {hellos[currentIndex]}
      </div>
    </div>
  );
};

export default HelloLanguages;
