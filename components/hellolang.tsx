"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HelloLanguages = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hellos.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex pb-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl font-bold">{hellos[currentIndex]}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HelloLanguages;
