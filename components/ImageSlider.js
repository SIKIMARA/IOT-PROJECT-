"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/image1.jpg', // Replace with the actual image URLs
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
  ];

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4500); // Change the duration here for the desired auto slide duration in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden"
      variants={imageVariants}
        initial="hidden"
        animate="visible"
    >
      <Image
        key={currentIndex}
        src={images[currentIndex]}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0"
      />
    </motion.div>
  );
};

export default ImageSlider;
