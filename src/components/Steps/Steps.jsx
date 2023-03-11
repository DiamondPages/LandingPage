'use client'
import Animation from '../Animation'
import Content from '../content/Content'
import styles from '../Steps/Steps.module.sass'
import dominio from '../../assets/steps/1/dominio.png'
import performance from '../../assets/steps/1/performance.png'
import datocms from '../../assets/steps/1/datocms.png'
import Image from 'next/image'
import Briefing from '@/assets/svg/Briefing'
import Development from '@/assets/svg/Development'
import NextStep from '@/assets/svg/NextStep'
import Done from '@/assets/svg/Done'

export default function Steps() {

    const Styles = styles.steps

  return (
    <div className={`${Styles} lightMode`}>

        <Content>
            <Animation transition='fade-up'>

                <div className={styles.sticky}>
                    <h2>Nossos diferenciais</h2>
                </div>

                <div className={styles.steps1}>
                    <div>
                        <span>Domínio</span>
                        <p>Você não precisa pagar um centavo, oferecemos um domínio seguro com certificado SSL da Vercel, que é a empresa responsável por desenvolver a tecnologia que utilizamos para criar o código das nossas páginas, a Vercel disponibiliza gratuitamente o domínio (ex: suaempresa.vercel.app).</p>
                        <p>Se você ja possui um domínio não tem problema também, integraremos ele a sua página, se deseja comprar um ( ex: suaempresa.com.br ) nós iremos te auxiliar na compra.</p>
                        <Image src={dominio} alt='' sizes="(max-width: 600px) 100vw" />
                    </div>
                    <div>
                        <span>Hospedagem</span>
                        <p>A hospedagem também fica por conta da Vercel, portanto você não precisa se preocupar em comprar uma, é disponibilizado uma ótima hospedagem com 100gb de largura de banda disponíveis que suporta milhares de visitantes simultâneos, também é possível pagar pra aumentar ainda mais a largura de banda.</p>
                    </div>
                    <div>
                        <span>Conteúdo editável</span>
                        <p>Você poderá editar os textos, imagens e vídeos do site através de um CMS (Sistema de gerenciamento de conteúdo), de forma simples e fácil, e sempre que possuir dúvidas pode entrar em contato conosco.</p>
                        <Image src={datocms} alt='' width={500} sizes="(max-width: 600px) 100vw" />


                    </div>
                    <div>
                        <span>Performance</span>
                        <p>Visitantes esperam que o site carregue em dois segundos ou menos, e grande parte deles abandonará uma página que demora três ou mais segundos.</p>
                        <p>Desenvolvemos nossas páginas para que elas carreguem em até no máximo 2 segundos. Realizamos testes de performance pelo GT Metrix e PageSpeed,</p>
                        <Image src={performance} alt='' width={590} sizes="(min-width: 1023px) 590px, (max-width: 600px) 100vw"/>

                    </div>
                </div>
                
            </Animation>

            <Animation transition='fade-up'>
                <h2>Nosso método de trabalho</h2>
            </Animation>


            <Animation transition='fade-up'>
                <div>
                    <Briefing/>
                    <span>Briefing</span>
                    <p>Nessa etapa você será submetido a um questionário onde irá nos enviar seus textos, imagens e vídeos, contar suas preferências e dar sugestões sobre como você quer sua página.</p>
                </div>
                <div className={styles.nextStep}>
                    <NextStep/>
                </div>

                <div>
                    <Development/>
                    <span>Layout e Desenvolvimento</span>
                    <p>Na etapa de Layout nós iremos desenvolver o protótipo da sua página utilizando o Figma e Photoshop, você pode dar sugestões e solicitar grandes alterações a qualquer momento, nosso objetivo é desenvolver sua página ideal.
                    </p>                    
                    <p>No desenvolvimento transformaremos o layout do protótipo em código e integraremos as suas ferramentas de métricas como pixels, google analytics etc.</p>    
                </div>
                <div className={styles.nextStep}>
                    <NextStep/>
                </div>

                <div>
                    <Done/>
                    <span>Entrega</span>
                    <p>Entregaremos o site junto com os resultados dos testes de performance, e as instruções pra você realizar atualizações no conteúdo.</p>
                    <p>Após a entrega do projeto você terá até 3 dias úteis pra solicitar pequenas alterações que não comprometam a estrutura da página.</p>
                </div>
            </Animation>

        </Content>
    </div>
  )
}
