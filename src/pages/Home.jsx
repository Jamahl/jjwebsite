import React from 'react';
import styles from '../styles/Home.module.css';
import Slideshow from '../components/Slideshow';

const images = [
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.29%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.29.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.30%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.30%20(2).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.30.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.31%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.31%20(2).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.31.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.32%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.32.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.33%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.33.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.34.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.35%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.35%20(2).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.35.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.35.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.36%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.36.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.37%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.52.37.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.54.13.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.54.44.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.55.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.56%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.56%20(2).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.56.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.57%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.57.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.58%20(1).jpeg",
  "https://raw.githubusercontent.com/Jamahl/jjwebsite/main/WhatsApp%20Image%202025-05-15%20at%2007.57.58.jpeg"
];

const Home = () => (
  <>
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>Discover Timeless Jewellery</h1>
        <p>Custom made, hand crafted jewellery made in Bangkok..</p>
      </div>
    </section>
    <Slideshow images={images} />
  </>
);

export default Home;
