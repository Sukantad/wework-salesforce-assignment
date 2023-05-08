import React from 'react'
import styles from '../styles/ProjectScope.module.css'

export const ProjectScope = () => {

  const emptyBox = Array(15).fill('')

  return (
  <div >
    <div className={styles.project} >
      <p className={styles.projectscope_title} >Project Scope Recap</p>
      <div>
        <div className={styles.plan}  >
          <p>Mutual Action Plan</p>
          <p className={styles.percent} >3%</p>
        </div>
        <div className={styles.box} >
          <div className={styles.leftcircularfilledbox} ></div>
          { emptyBox.map((item,index)=>(
            <div key={index} className={styles.emptybox} ></div>
          )) }
          <div className={styles.rightcircularfilledbox} ></div>
        </div>
      </div>
    </div>
    <div className={styles.tabbox} >
       <div className={styles.lefttab} >
          <div className={styles.tabactive} ><p>Basic Info</p></div>
          <div><p>Files</p></div>
          <div> <p>Mutual Action Plan</p></div>
          <div><p>Contact</p></div> 
       </div>
       <div className={styles.righttab} >
        <div><p>Internal Actions</p></div> 
       </div>
    </div>
  </div>
  )
}
