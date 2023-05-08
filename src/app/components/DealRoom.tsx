import React from 'react'
import Image from 'next/image'
import styles from '../styles/DealRoom.module.css'
import maskgroup from '../assets/images/maskgroup.jpg'
import Vector from '../assets/images/Vector.png'
import wework1 from '../assets/images/wework1.png'
import salesforce from '../assets/images/salesforce.png'
import skewbg from '../assets/images/skewbg.png'


export const DealRoom = () => {
  return (
    <div>
        <div className={styles.deal_header} >
          <p className={styles.textv1} >WeWork + Salesforce</p>
          <button>Publish/Share</button>
        </div>
        <div className={styles.dealroom} >
           <div className={styles.dealRoomImage} >
           < Image src={maskgroup} alt='mask-group'/>
            <div className={styles.skewimgcontainer} >
              <div>
                <Image src={skewbg} alt='skewbg' />
                 <p>Workspace Proposal</p>
              </div>
            </div>
           </div>
            <div className={styles.DealRoomCard} >
                <Image src={wework1} alt='wework' />
                <Image src={Vector} alt='vector' />
                <Image src={salesforce} alt='salesforce' />
            </div>
        </div>
    </div>
  )
}
