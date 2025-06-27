import styles from "./page.module.css";
import Image from "next/image";
const notFound=()=>{

    return(
        <div className={`${styles.centerAdjust} ${styles.common}`} style={{flexDirection:"column",gap:10}} >
        <span>
        <Image
          src="/Astutrise.png"
          alt="Astutrise Logo ball"
          width={100}
          height={24}
          priority
        />
        </span>
        <span style={{fontWeight:700}}>
            Page Not Found &nbsp;|  &nbsp;Error 404
        </span>
        </div>
    )
}
export default notFound