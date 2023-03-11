

'use client'
import Image from 'next/image'
import React from 'react'
import styles from './Floating.module.sass'
import Whatsapp from '../../../../assets/whatsapp.png'

const ButtonFloating = () => {
  return (               
    <a className={styles.floating}
        onClick={()=>gtag('event','floating')}
        href='https://wa.me/5521979808549?text=Ol%C3%A1%20Diamond%20Pages,%20estou%20no%20site%20de%20voc%C3%AAs%20e%20estou%20com%20uma%20d%C3%BAvida' target='_blank'
        aria-label='Iniciar uma conversa no whatsapp da Diamond Pages'>
            <Image alt='Icone do Whatsapp' src={Whatsapp} width={64} height={64} priority/>
    </a>
  )
}

export default ButtonFloating