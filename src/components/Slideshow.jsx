import React, { useState, useEffect } from 'react';
import styles from '../styles/Slideshow.module.css';

const Slideshow = ({ images, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (!images || total === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval, total]);

  if (!images || total === 0) return null;

  const goTo = (i) => setIndex(i);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className={styles.slideshow}>
      <button className={styles.arrowLeft} onClick={prev} aria-label="Previous image">&#8592;</button>
      <img src={images[index]} alt={`Slide ${index + 1}`} className={styles.slideImg} />
      <button className={styles.arrowRight} onClick={next} aria-label="Next image">&#8594;</button>
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? styles.activeDot : styles.dot}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
