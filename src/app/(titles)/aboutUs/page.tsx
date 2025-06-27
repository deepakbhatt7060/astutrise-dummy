"use client";
import styles from "../titles.module.css";
import Image from "next/image";
const AboutUs = () => {
    return (
      <div className={`${styles.centerAdjust} ${styles.mainHolder}`} style={{width:"100%",flexDirection:"column",lineHeight:1.5}}>
         <div className={styles.frstHolder} style={{textAlign:"justify",display:"flex",flexDirection:"row",color:"lightgray",fontSize:16}}>
         <span style={{fontWeight:600,color:"lavender"}}>Astutrise.in</span> is a startup company offering comprehensive web solutions at unmatched affordability. We are committed to turning innovative ideas into effective online solutions and enhancing digital interaction. Our team excels in providing tailored web services, ensuring that each project meets the highest standards of quality and performance. Whether you’re looking to build a new website, optimize an existing one, or develop custom digital solutions, we are here to help you achieve your goals with efficiency and creativity.
         </div>
        <div className={styles.frstHolder}>
        <div className={styles.divHolder}>
        <div className={styles.imageDiv}>
        <Image
                src="/Astutrise_community.png"
                alt="Astutrise Community Image"
                className={styles.laptop}
                layout="intrinsic"
                width={400}
                height={500}
                priority
                style={{boxShadow:"0 0 5px 5px rgb(0,0,0,0.7)"}}
                />
        </div>
        <div className={styles.textContent} style={{color:"lightgray"}}>
         We are a collaborative community of professionals dedicated to delivering exceptional products through our collective expertise and teamwork. <br /><br />
        Each of us, representing recognized companies, continually learns and leverages the latest tools and technologies to enhance user experience and ensure our products are scalable for any scope.
        </div> 
        </div>
      
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  