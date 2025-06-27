
"use client";
import styles from "../titles.module.css";
import Image from "next/image";
const Contact = () => {
    return (
        <div className={`${styles.centerAdjust} ${styles.main}`} style={{justifyContent:"flex-start",width:"100%",flexWrap:"wrap",marginTop:80,gap:40,color:"whitesmoke",fontWeight:200}}>
            <div className={styles.mobContactImage} >
            <Image
                src="/Astutrise_Call.png"
                alt="Astutrise Call Icon"
                className={styles.laptop}
                width={200}
                height={200}
                priority
                />
            </div> 
         <div className={styles.mobContact} style={{color:"lavender"}}>
            <div>Contact: <span style={{color:"lightblue"}}>9335306764</span></div>
            <div>Whatsapp: <span style={{color:"lightblue"}}>9335306764</span></div>
            <div>Mail: <span style={{color:"lightblue"}}>support@astutrise.com, admin@stutrise.com</span></div>
            <div>Address: <span style={{color:"lightblue"}}>Saket, Delhi (110017)</span></div>
         </div>
         <div>

         </div>
        </div>
    );
  };
  
  export default Contact;
  