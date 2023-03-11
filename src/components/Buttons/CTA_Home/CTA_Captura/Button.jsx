'use client'
import React from 'react'

const ButtonCaptura = ({children}) => {
  return (               
    <a 
        onClick={()=>[gtag('event','captura'),
        fbq('track', 'Comprar_Captura')]}
        href='https://wa.me/5521979808549?text=Preciso%20de%20uma%20p%C3%A1gina%20de%20captura' target='_blank'>
        {children}
    </a>
  )
}

export default ButtonCaptura