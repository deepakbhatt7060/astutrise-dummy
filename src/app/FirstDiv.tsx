import styles from "./page.module.css";
import { SwipeButton } from "./_components/SwipeButton";
import Image from "next/image";
const FirstDiv=(props:any)=>{

    return(
        <>
       <div className={styles.divContainer}>
        <div className={styles.divChild1} >
        <Image
          src="/Astutrise_code.png"
          alt="Astutrise code image"
          className={styles.laptop}
          width={props.check?200:400}
          height={props.check?200:400}
          priority
        />
        </div>
        <div className={`${styles.divChild5}`}>
           <span className={styles.headingStyles} style={{textAlign:"center"}}>Automating Everything</span>
               <div className={styles.contentStyles} style={{textAlign:"center"}}>
               Transforming Every Idea into Digital Innovation through Automation.
               </div>
               <div className={`${styles.swipeButton} ${styles.centerAdjust}`} style={{color:"lavender"}}>
               <span>Our Work</span><SwipeButton onButtonClick={props.onButtonClick}/>
               </div>
        </div>
       </div>
       
       </>
    )
}
export default FirstDiv