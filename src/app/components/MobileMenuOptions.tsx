import React from 'react'
import styles from '../styles/MobileMenuOptions.module.css'
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'
import bag from '../assets/images/bag.svg'
import notification from '../assets/images/notification.svg'
import help from '../assets/images/help.svg'
import CloseButton from '../assets/images/CloseButton.svg'
import Image from 'next/image'

interface MobileMenuProps {
  handleClose: () => void;
}

export const MobileMenuOptions:React.FC<MobileMenuProps> = ({handleClose}) => {
  return (
    <div className={styles.menubar} >
      <Image onClick={()=>handleClose()} className={styles.closebutton} src={CloseButton} alt='CloseButton' />
      <div className={styles.container} >
        <div className={styles.userprofile} >
          <Image src={logo} alt='logo' />
          <div className={styles.user} >
            <p>Jane Smith</p>
            <p>Sales Executive</p>
          </div>
        </div>
        <div className={styles.menulist} >
          <Image src={search} alt='search' />
          <p>Search</p>
        </div>
        <div className={styles.menulist} >
          <Image src={bag} alt='inboc' />
          <p>Inbox</p>
        </div>
        <div className={styles.menulist} >
          <Image src={notification} alt='notification' />
          <p>Notification</p>
        </div>
        <div className={styles.menulist} >
          <Image src={help} alt='help' />
          <p>Help</p>
        </div>
      </div>
    </div>
  )
}
