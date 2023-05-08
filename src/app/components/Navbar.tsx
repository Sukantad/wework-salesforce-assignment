import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import search from "../assets/images/search.svg";
import bag from "../assets/images/bag.svg";
import notification from "../assets/images/notification.svg";
import help from "../assets/images/help.svg";
import logo from "../assets/images/logo.svg";
import rightarrow from "../assets/images/rightarrow.svg";
import openmenu from "../assets/images/openmenu.svg";

interface NavBarProps {
  handleShow: () => void;
}

const NavBar:React.FC<NavBarProps> = ({ handleShow }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div>
          <div></div>
        </div>
        <Image src={rightarrow} alt="rightarrow" />
      </div>
      <div className={styles.rightnavlist}>
        <div>
          <Image src={search} alt="search" />
        </div>
        <div>
          {" "}
          <Image src={bag} alt="bag" />
        </div>
        <div className={styles.notification}>
          <Image src={notification} alt="notification" />
          <div className={styles.notification_count}>
            <p>25</p>
          </div>
        </div>
        <div>
          <Image src={help} alt="help" />
        </div>
        <div>
          {" "}
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.openmenu}>
        <Image onClick={handleShow} src={openmenu} alt="openmenu" />
      </div>
    </div>
  );
};
export default NavBar;
