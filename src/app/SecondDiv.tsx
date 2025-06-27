import styles from "./page.module.css";
import { CardContainerProps } from "./CardContainer";
const SecondDiv=(props:CardContainerProps)=>{
return(
    <div className={styles.mainContainer2}>
        <div className={styles.divContainer2} >
            <div className={`${styles.divChild3} ${styles.commonSecond}`} style={{height: props.check?"calc(33% - 32px)":""}}>
               <span className={styles.headingStyles} style={{fontSize:props.check?26:""}}> Who We Are?</span>
                <div className={styles.contentStyles} style={{fontSize:props.check?12:""}}>
                We are a team of professionals with expertise in a diverse range of cutting-edge technologies, dedicated to helping our clients automate complex ideas efficiently and affordably.
                </div>
            </div>
            <div className={`${styles.divChild3} ${styles.commonSecond}`} style={{height: props.check?"calc(33% - 32px)":""}}>
            <span className={styles.headingStyles} style={{fontSize:props.check?26:""}}> What We Do?</span>
                <div className={styles.contentStyles} style={{fontSize:props.check?12:""}}>
                We transform our customer&apos;s ideas into reality with cutting-edge designs and robust security&lsquo; leveraging the latest technologies of their choice. We take them beyond their expectations&lsquo; delivering solutions that lead the way in innovation.
                </div>
            </div>
        </div>
        <div className={`${styles.divChild4}`} style={{height: props.check?"calc(33% - 32px)":""}}>
               <div className={styles.headingStyles} style={{fontSize:props.check?26:""}}>Technologies</div> 
                <div className={styles.contentStyles} style={{textAlign:"center",fontSize:props.check?12:""}}>
                HTML, CSS / Tailwind CSS, Javascript, TypeScript, React.js/Next.js, Angular, Bootstrap, MUI, Node.js, Java, C#, Python, Linux, MySql, MongoDB, AWS, Azure.
                </div>
        </div>
    </div>
)
}
export default SecondDiv;