'use client'
import React from 'react'

const ButtonDuvidas = ({children}) => {
  return (               
    <a 
        onClick={()=>gtag('event','duvidas')}
        href='https://wa.me/5521979808549?text=Preciso%20de%20outras%20p%C3%A1ginas' target='_blank'>
        {children}
    </a>
  )
}

export default ButtonDuvidas