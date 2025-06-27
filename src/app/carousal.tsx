import { useState, useEffect } from 'react';
import styles from './page.module.css'; 
import Image from 'next/image';
const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["/Astutrise_requirement.png", "/Astutrise_plan.png", "/Astutrise_Develop.png","/Astutrise_Test.png","/Astutrise_Deploy.png","/Astutrise_Feedback.png"];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={`${styles.carousel} ${styles.varWidth1}`} >
      <div className={styles.slide}> 
      <Image
          src={slides[currentIndex]}
          alt="Astutrise_Images"
          className={styles.laptop}
          width={400}
          height={600}
          priority
        /></div>
    </div>
  );
};

export default CustomCarousel;
