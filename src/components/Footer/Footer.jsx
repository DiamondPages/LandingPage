'use client'
import styles from '../Footer/Footer.module.sass'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Instagram from '@/assets/svg/Instagram'


export default function Footer() {

    const Styles = styles.footer

  return (
    <footer className={`${Styles} darkMode`}>
        <div>
            <div>
                <Image src={logo} alt='Logo' width={64}/>
                <span>Diamond Pages</span>
            </div>
                <p>A Diamond Pages foi criada para ajudar pessoas e empresas que querem vender um produto ou serviço na internet através de páginas profissionais. prezamos pela qualidade de atendimento e qualidade nos nossos projetos.</p>
        </div>
        
        <div>
            <p>Diamond Pages © 2023 - Todos os direitos reservados</p>
            <div>
                <a href='/politica-de-privacidade' target='_blank'>Política de privacidade</a>
                <a href='/termos-e-condicoes' target='_blank'>Termos e condições</a>
                <Instagram/>
            </div>
        </div>

    </footer>
  )
}
