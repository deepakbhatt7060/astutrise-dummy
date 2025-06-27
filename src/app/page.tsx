"use client";
import styles from "./page.module.css";
import Overlay from "./overlay";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Lunara } from "./Lunara";
import FirstDiv from "./FirstDiv";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import dynamic from 'next/dynamic'
import CustomCarousel from "./carousal";
import TextContain from "./_components/textContainer";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { useOverlay } from "./Context";

const CardContainer = dynamic(() => import('./CardContainer'), { ssr: false })
export default function Home() {
  const [count, setCount] = useState(0);
  const [visible, setIsVisible] = useState(true);
  const swipeRef = useRef<HTMLDivElement>(null);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const {welcome, changeWelcome}=useOverlay();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const link = isMobile
        ? 'https://wa.me/9335306764'
        : 'https://web.whatsapp.com/send?phone=9335306764';
      setWhatsappLink(link);
      if (isMobile) {
        setIsCheck(!isCheck);
      }
    }
  }, [isClient]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        const x = document.querySelector(`.${styles[`f${newCount}`]}`);
        if (x && x instanceof HTMLElement) {
          x.style.display = "block";
        }
        return newCount;
      });
    }, 160);

    const ballTimeout = setTimeout(() => {
      const x = document.querySelector(`.${styles["Astutrise_Logo_Ball"]}`);
      if (x && x instanceof HTMLElement) {
        x.style.display = "block";
      }
    }, 2000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        changeWelcome();
      }, 1700);
      const x = document.querySelector(`.${styles["overlay"]}`);
      if (x && x instanceof HTMLElement) {
        x.classList.add(styles["fade-out"]);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(ballTimeout);
    };
  }, []);  

  const transformSwipe = () => {
    if (swipeRef.current) {
      swipeRef.current.style.transform = `translateX(-${100}vw)`;
    }
  };
 

  return ([<div key="mainholder" className={styles.mainHolder}>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.contentBox} style={{ zIndex: 999 }}>
          <div ref={swipeRef} className={styles.swipe} style={{ height: isCheck ? "calc(75vh - 150px)" : "" }}>
            <div className={styles.swipeChild}>
              <FirstDiv onButtonClick={transformSwipe} check={isCheck} />
            </div>
            <div className={styles.swipeChild}>
              <SecondDiv check={isCheck} />
            </div>
          </div>
        </div>
        <div style={{width:"100vw", height:"400px", backgroundColor:"transparent",zIndex:9}}>

        </div>
        <div className={styles.workProcessContainer}>
          <div style={{ width: "100%", color: "black", fontWeight: 700 }} className={`${styles.headingStyles} ${styles.centerAdjust}`}>Our Methodology</div>
          <div className={styles.workProcess}>
            <CustomCarousel />
            <div className={`${styles.carousel} ${styles.varWidth2}`} style={{ flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <TextContain title="W" subtitle="e" content="prioritize a comprehensive and innovative approach, combining deep expertise with a commitment to excellence. Our methodology is centered around understanding your unique needs and delivering tailored solutions that drive results. We leverage industry best practices and cutting-edge techniques to ensure we meet and exceed your expectations." />
              <TextContain title="W" subtitle="e" content="strictly adhere to the Software Development Life Cycle (SDLC) to ensure a systematic and efficient development process, while maintaining transparency with our project stakeholders throughout every phase of the project." />
              <TextContain title="C" subtitle="ommunicating" content="regularly enables us to gather feedback and refine the project, ultimately driving its success." />
              <TextContain title="24&times;7" subtitle="Complimentary" content="assistance and maintenance is offered for a period of two months following the successful completion of each project." />
            </div>
            <Footer />
          </div>
        </div>
        {visible && (
          <Lunara
            options={[
              {
                item: <Link href={whatsappLink} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer"><Image src="/Astutrise_Whatsapp.png" alt="astutrise_whatsapp_icon" width={20} height={20} />
                  </a></Link>
              },
              {
                item: isCheck ? <a href="tel:+919335306764"><Image src="/Astutrise_contact.png" alt="astutrise_downward_arrow" width={20} height={20} /></a>
                  : <Link href="/contact"><Image src="/Astutrise_contact.png" alt="astutrise_contact_icon" width={20} height={20} /></Link>
              },
            ]}
          />
        )}
        {welcome && <Overlay />}
      </div>
      </div>,
      <div key="check" id="check" style={{ position: "fixed", top:"0px", backgroundColor: "#c5bcca", height: isCheck ? "calc(100vh - 60px)" : "100vh", zIndex: 1, width: "100%", display: "flex", flexDirection: "column" }}>
        <ThirdDiv check={isCheck} />
        <CardContainer check={isCheck} />
      </div>
      
    ]);
}
