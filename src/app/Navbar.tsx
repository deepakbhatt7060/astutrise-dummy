import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useOverlay } from "./Context";
import { isMobile as detectMobile } from "react-device-detect";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { toggleOverlay } = useOverlay();

  useEffect(() => {
    setIsMobile(detectMobile);
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Link href="/">
          <Image
            src="/Astutrise_mobile_logo.png"
            alt="Astutrise Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </Link>
        <div className={styles.rightNavbar}>
          <div className={styles.navbarContent} style={{color:"white",fontWeight:200}}>
            <Link href="/aboutUs">About Us</Link>
          </div>
          <div className={styles.navbarContent} style={{color:"white",fontWeight:200}}>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.show}>
            <Image
              src="/Astutrise_hamburger_white.png"
              alt="Astutrise Hamburger Icon"
              className={styles.vercelLogo}
              width={20}
              height={20}
              priority
              onClick={toggleOverlay}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
