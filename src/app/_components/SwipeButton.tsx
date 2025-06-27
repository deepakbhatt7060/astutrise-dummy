import Image from "next/image";
import styles from "../page.module.css"
export const SwipeButton=(props:any)=>{
    const backButtonStyle:React.CSSProperties={
        backgroundColor:"grey",
        borderRadius:"50%",
        width:50,
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer"
    }
    const transformSwipe=()=>{
        
     }
return(
<div id="backDiv" style={{...backButtonStyle}} onClick={props.onButtonClick} >
<span style={{fontSize:16,paddingLeft:5}} id="backButton" className={styles.material}>
<Image
src="/Astutrise_arrowright.png" alt="Astutrise_arrowright_swipearrow" width={20} height={20}/>
</span>
</div>
)
}