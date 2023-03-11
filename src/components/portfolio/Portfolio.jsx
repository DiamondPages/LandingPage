'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade, EffectFlip, EffectCards, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../portfolio/swiper.sass'
import React from 'react'
import styles from '../portfolio/Portfolio.module.sass'
import Animation from '../Animation'
import Content from '../content/Content'
import Image from 'next/image'
import mockup from '../../assets/mockup.png'
import English from './Projects/English';
import Barber from './Projects/Barber';
import France from './Projects/France';
import Fitness from './Projects/Fitness';
import Gestor from './Projects/Gestor';

const Portfolio = () => {
    const Styles = styles.portfolio

  return (
    <div className={`${Styles} lightMode`}>

        <Content>
            <Animation transition='fade-left'>
                <h2>Confira alguns dos nossos projetos</h2>
                <p>Passe o mouse ou clique sobre a tela pra ver o projeto por completo.</p>
            </Animation>

            <Animation transition='fade-up'>
                <Swiper
                    effect='coverflow'
                    speed={1}
                    slidesPerView={1}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[Navigation]}
                    className="swiper_container">
                    <SwiperSlide>
                        <Fitness />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Gestor />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Barber />
                    </SwiperSlide>
                    <SwiperSlide>
                        <English />
                    </SwiperSlide>
                    <SwiperSlide>
                        <France/>
                    </SwiperSlide>
                    <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                <Image src={mockup} width={1024} alt='Imagem de um Notebook e celular' sizes="(min-width: 601px) 1024px, (max-width: 600px) 100vw"/>
            </Animation>

            <Animation transition='fade-right'>
                <h2>A próxima pode ser a sua</h2>
                <p>Solicite um orçamento agora mesmo logo abaixo</p>
            </Animation>
        </Content>
    </div>
  )
}

export default Portfolio