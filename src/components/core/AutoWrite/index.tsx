"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AutoWriteProps {
  text: string;
  speed: number;
}

const AutoWrite: React.FC<AutoWriteProps> = (props) => {
  const { text, speed } = props;
  const [displayedtext, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, speed);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedtext}
      <motion.span
        className="lg:inline-block hidden font-bold mr-4 text-lime-500 lg:text-5xl"
        animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
        transition={{ duration: speed / 100, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
};

export default AutoWrite;
