import styles from "../page.module.css"
type textContainerProps={
    title:string,
    subtitle:string,
    content:string
}
const TextContain = (props:textContainerProps) => {
  return (
    <div className={styles.adjustWidth} style={{ textAlign: "justify" }}>
      <span style={{ color: "black" }} className={styles.headingStyles}>
        {props.title}
        </span>
        <span
          style={{ marginLeft: -5, fontWeight: 400,fontSize:16 }}
          className={styles.contentStyles}
        >
         {props.subtitle}
        </span>
     
      <span className={styles.contentStyles} style={{fontSize:16}}>
      {props.content}
      </span>
    </div>
  );
};
export default TextContain;
