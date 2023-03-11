'use client'
import React from 'react'
import Animation from '../Animation'
import styles from '../prices/Prices.module.sass'
import Content from '../content/Content'
import Check from '@/assets/svg/Check'
import ButtonLanding from '../Buttons/CTA_Home/CTA_LandingPage/Button'
import Whatsapp from '@/assets/svg/Whatsapp'
import ButtonDuvidas from '../Buttons/CTA_Home/CTA_Duvidas/Button'
import Info from '@/assets/svg/Info'
import ButtonCaptura from '../Buttons/CTA_Home/CTA_Captura/Button'


const Prices = () => {
    const Styles = styles.prices

  return (
    <div id='prices'  className={`${Styles} darkMode`}>

        <Content>
            <Animation transition='fade-up'>
                <h2>Nossos Serviços</h2>
                <p>obs: os serviços abaixo não incluem a copy</p>
                <div className={styles.date}><Info/><p>Oferta com <span>65% de desconto</span> por <span>tempo limitado</span></p></div>
            </Animation>
            
            <Animation transition='fade-up'>
                <div className={styles.landing}>
                    <h3>PÁGINA DE VENDAS</h3>
                    <div className={styles.checks}>
                        <span><Check/>Otimização</span>
                        <span><Check/>Design chamativo</span>
                        <span><Check/>Conteúdo editável</span>
                        <span><Check/>Foco na conversão</span>
                        <span><Check/>Google Analytics e Pixels</span>
                        <span><Check/>Entrega em até 5 dias úteis</span>
                    </div>
                    
                    <div className={styles.price}>
                        <span className={styles.oldPrice}>De R$1499,00 por</span>
                        <span className={styles.parcelado}><span>12x</span> R$53,41</span>
                        <span className={styles.avista}><span>ou</span> R$499,00 <span>à vista</span></span>
                    </div>

                    <ButtonLanding>PRECISO DESSA<Whatsapp/></ButtonLanding>
                
                </div>
                <div className={styles.captura}>
                <h3>PÁGINA DE CAPTURA</h3>
                    <div className={styles.checks}>
                        <span><Check/>Otimização</span>
                        <span><Check/>Design chamativo</span>
                        <span><Check/>Conteúdo editável</span>
                        <span><Check/>Integração com email</span>
                        <span><Check/>Google Analytics e Pixels</span>
                        <span><Check/>Entrega em até 3 dias úteis</span>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.oldPrice}>De R$999,00 por</span>
                        <span className={styles.parcelado}><span>12x</span> R$37,50</span>
                        <span className={styles.avista}><span>ou</span> R$350,00 <span>à vista</span></span>
                    </div>
                    <ButtonCaptura>PRECISO DESSA<Whatsapp/></ButtonCaptura>
                </div>
            </Animation>

            <Animation transition='fade-up'>
                <h2>Precisando de outra coisa?</h2>
                <p>A Diamond Pages também produz sites institucionais, páginas upsell, downsell, blogs etc. 
                entre em contato pelo whatsapp e solicite um orçamento.</p>
                <ButtonDuvidas>Whatsapp<Whatsapp/></ButtonDuvidas>
            </Animation>
        </Content>
    </div>
  )
}

export default Prices