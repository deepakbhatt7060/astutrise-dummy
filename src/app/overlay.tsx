import styles from "./page.module.css";
import Image from "next/image";
const Overlay = () => {
  return (
    <div className={styles.overlay}>
        
       <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
       <div style={{display:"flex",justifyContent:"flex-end",height:"47%"}}>
        <div className={styles.ballContainer}>
       <Image
          src="/Astutrise_ball.png"
          alt="Astutrise Logo ball"
          className={styles.Astutrise_Logo_Ball}
          width={20}
          height={20}
          priority
        />
        </div>
       </div>
        
     <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",}}>
      <span className={styles.f1}>A</span>
      <span className={styles.f2}>s</span>
      <span className={styles.f3}>t</span>
      <span className={styles.f4}>u</span>
      <span className={styles.f5}>t</span>
      <span className={styles.f6}>r</span>
      <span className={styles.f7}>i</span>
      <span className={styles.f8}>s</span>
      <span className={styles.f9}>e</span>
      </div>
      </div>
    </div>
  );
};
export default Overlay;
