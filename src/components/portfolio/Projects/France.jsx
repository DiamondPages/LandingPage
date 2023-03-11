import Image from 'next/image'
import React from 'react'
import styles from '../Project.module.sass'
import frances1 from '../../../assets/portfolioPages/frances1.png'
import frances2 from '../../../assets/portfolioPages/frances2.png'

const France = () => {
  return (
    <div className={styles.projectContainer}>

        <Image style={{animationDuration: '15s'}} width={500} className={styles.mobile} quality={50} src={frances2} alt=''/>
        <Image style={{animationDuration: '15s'}} width={500} className={styles.desktop}  quality={50} src={frances1} alt=''/>

    </div>
  )
}

export default France