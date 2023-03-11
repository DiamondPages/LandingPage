'use client'
import React from 'react'

const ButtonLanding = ({children}) => {
  return (               
    <a 
        onClick={()=>[gtag('event','landingpage'),
        fbq('track', 'Comprar_Landing')]}
        href='https://wa.me/5521979808549?text=Preciso%20de%20uma%20p%C3%A1gina%20de%20vendas' target='_blank'>
        {children}
    </a>
  )
}

export default ButtonLanding