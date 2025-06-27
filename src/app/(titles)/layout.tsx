"use client";
import styles from "./titles.module.css";
import Navbar from "../Navbar";
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div style={{ background: "linear-gradient(to bottom, #4f4f51, #2c2b30)"}} className={styles.heightFix}>
        <Navbar/>
        {children}
        </div>
    );
  };
  
  export default layout;
  