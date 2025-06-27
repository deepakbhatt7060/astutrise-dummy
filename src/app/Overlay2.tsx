"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import { useRef, useEffect, useState } from "react";
import { useOverlay } from "./Context";
const Overlay2=()=>{
    const overlayRef=useRef<HTMLDivElement>(null);
    const itemsRef=useRef<HTMLDivElement>(null);
    const {overlay,toggleOverlay}=useOverlay();
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (overlayRef.current) {
          if (overlay) {
            if (overlayRef.current.style.width === "0vw") {
              overlayRef.current.style.width = "95vw";
              if (timeoutId) {
                clearTimeout(timeoutId); 
              }
              const newTimeoutId = setTimeout(() => {
                if (itemsRef.current) {
                  itemsRef.current.style.display = "flex";
                }
              }, 350);
              setTimeoutId(newTimeoutId); 
            }
          } else {
            if (overlayRef.current.style.width === "95vw") {
              overlayRef.current.style.width = "0vw";
              if (timeoutId) {
                clearTimeout(timeoutId); 
              }
              const newTimeoutId = setTimeout(() => {
                if (itemsRef.current) {
                  itemsRef.current.style.display = "none";
                }
              }, 350);
              setTimeoutId(newTimeoutId);
            }
          }
        }
    
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      }, [overlay,timeoutId]);

    return(
        <div ref={overlayRef} className={styles.headOverlay} style={{width:"0vw"}}>
    <div ref={itemsRef} className={styles.headOverlayContent} >
    <div  style={{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:10}}>
    <Image
          src="/Astutrise_Close.png"
          alt="Astutrise_close_icon"
          className={styles.vercelLogo}
          width={25}
          height={25}
          priority
          onClick={toggleOverlay}
          style={{cursor:"pointer"}}
        />
    </div>
    <div className={`${styles.centerAdjust} ${styles.headOverlayItems}`}>
    <Link href="/" onClick={toggleOverlay}>
       Home
    </Link>
      </div>
    <div className={`${styles.centerAdjust} ${styles.headOverlayItems}`} >
    <Link href="/aboutUs" onClick={toggleOverlay}>
       About Us
    </Link>
      </div>
    <div className={`${styles.centerAdjust} ${styles.headOverlayItems}`}>
    <Link href="/contact" onClick={toggleOverlay}>
       Contact
    </Link>
    </div>
    </div>
    </div>

    )
}
export default Overlay2;