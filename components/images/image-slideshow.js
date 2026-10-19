'use client';

import { useEffect, useState } from 'react';

import classes from './image-slideshow.module.css';

const images = [
  { src: '/images/burger.jpg', alt: 'A delicious, juicy burger' },
  { src: '/images/curry.jpg', alt: 'A delicious, spicy curry' },
  { src: '/images/dumplings.jpg', alt: 'Steamed dumplings' },
  { src: '/images/macncheese.jpg', alt: 'Mac and cheese' },
  { src: '/images/pizza.jpg', alt: 'A delicious pizza' },
  { src: '/images/schnitzel.jpg', alt: 'A delicious schnitzel' },
  { src: '/images/tomato-salad.jpg', alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
