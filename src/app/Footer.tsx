import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
import { isMobile } from "react-device-detect";
import styles from "./page.module.css"
const Footer=()=>{
  const [whatsappLink, setWhatsappLink] = useState('');
  const [isClient, setIsClient] = useState(false);
    const emailLink = "mailto:support@example.com?subject=Inquiry&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0D%0A%0D%0AThank%20you!";
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    useEffect(() => {
      if (isClient) {
        const link = isMobile
          ? 'https://wa.me/9335306764'
          : 'https://web.whatsapp.com/send?phone=9335306764';
        setWhatsappLink(link);
      }
    }, [isClient]);
    return(
        <div style={{height:"auto",width:"100%", backgroundColor:"rgb(0,0,0,0.9)",display:"flex",flexDirection:"column",gap:20}}>
       <div className={styles.footerContentHolder} style={{height:"auto",minHeight:"380px",width:"100%",display:"flex",gap:20}}>
           <div className={`${styles.centerAdjust} ${styles.footerPart1}`} style={{gap:40,flexDirection:"column"}}>
             <div className={styles.centerAdjust} style={{flexDirection:"column",gap:25}}>
             <div className={styles.headingStyles}> Join Us On</div>
             <div style={{display:"flex",gap:25}}> 
             <Link href="https://www.instagram.com/astutrise/" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
             <Image
          src="/Astutrise_instagram.png"
          alt="Astutrise instagram icon"
          className={styles.laptop}
          width={40}
          height={40}
          priority
        />
        </a>
        </Link>
        <Link href="https://www.linkedin.com/company/104141667/admin/dashboard/" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/Astutrise_linkedin.png"
          alt="Astutrise linkedin icon"
          className={styles.laptop}
          
          width={40}
          height={40}
          priority
        />
        </a></Link>
        <Link href="https://x.com/astutrise" legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/Astutrise_twitter.png"
          alt="Astutrise twitter icon"
          className={styles.laptop}
         
          width={50}
          height={50}
          priority
        />
        </a>
        </Link>
             </div>
             </div>
             <div className={`${styles.centerAdjust} ${styles.footerPart1}`} style={{flexDirection:"column",gap:25}}>
             <div className={styles.headingStyles}> Contact Us On</div>
             <div style={{display:"flex",gap:25}}> 
             <Link href={whatsappLink} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
             <Image
          src="/Astutrise_Whatsapp.png"
          alt="Astutrise_Whatsapp_icon"
          className={styles.laptop}
          width={40}
          height={40}
          priority
        />
        </a>
        </Link>
        <Link href={emailLink} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="/Astutrise_email.png"
          alt="Astutrise email icon"
          className={styles.laptop}
          width={50}
          height={50}
          style={{marginTop:-5}}
          priority
        />
         </a>
        </Link>
             </div>
             </div>
           </div>
           <div className={`${styles.centerAdjust} ${styles.footerPart1}`} >
            <div className={styles.footeradjust} style={{color:"lavender",display:"flex",flexDirection:"column",gap:10 }} title="">
           <span>Astutrise.in</span> 
           <span className={styles.contentStyles} style={{fontWeight:100,color:"lightgray",textAlign:"justify",fontSize:16}}> At Astutrise we surpass our customer&apos;s expectations by delivering exceptional solutions swiftly and cost-effectively. We are dedicated to transforming our client&apos;s visions into reality&lsquo; creating products that stand out from the rest.</span>
            </div>
           </div>
       </div>
       <div className={styles.centerAdjust} style={{color:"grey",width:"100%",alignItems:"flex-end",paddingBottom:5}}>
          &copy; Copyright 2024
       </div>
       </div>
    )
}
export default Footer;