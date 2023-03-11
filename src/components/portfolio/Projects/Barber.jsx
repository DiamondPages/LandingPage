import Image from 'next/image'
import React from 'react'
import styles from '../Project.module.sass'
import barber1 from '../../../assets/portfolioPages/barber1.png'
import barber2 from '../../../assets/portfolioPages/barber2.png'

const Barber = (props) => {
  return (
    <div style={props.style} className={styles.projectContainer}>

        <Image style={{animationDuration: '30s'}} width={500} className={styles.mobile} quality={50} src={barber2} alt=''/>
        <Image style={{animationDuration: '60s'}} width={500} className={styles.desktop}  quality={50} src={barber1} alt=''/>

    </div>
  )
}

export default Barber