import styles from "./page.module.css"
import Image from "next/image";
import { useRef } from "react";
import { CardContainerProps } from "./CardContainer";
const ThirdDiv=(props:CardContainerProps)=>{
    const checkRef=useRef(null);
return(
    <div style={{width:"100%",display:"flex",justifyContent:"flex-end",height:props.check?"calc(75vh - 75px)":"75vh",alignItems:"center",flexDirection:"column"}}>
         <div style={{fontSize:32,fontWeight:800,height:100,display:"flex",alignItems:"flex-end",color:"black"}}>
         What Sets Us Apart
        </div>
        <div style={{height:"calc(75vh - 200px )",display:"flex",alignItems:"center",position:"relative"}}>
    <Image
          src="/Astutrise_mobile.png"
          alt="Astutrise what sets us apart image"
          className={styles.laptop}
          width={props.check?350:400}
          height={props.check?350:400}
          priority
          
        />
        </div>
        <div style={{fontSize:32,fontWeight:800,height:100,display:"flex",alignItems:"flex-end",color:"black"}}>
            Our Services
        </div>
</div>
)
}
export default ThirdDiv;