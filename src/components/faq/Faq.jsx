'use client'
import React from 'react'
import Animation from '../Animation'
import Content from '../content/Content'
import styles from './Faq.module.sass'
import FaqQuestion from './FaqQuestion'

const Faq = () => {
    const Styles = styles.faq

  return (
    <div className={`${Styles} lightMode`}>

        <Content>
            <Animation transition='fade-up'>
                <h2>Perguntas frequentes</h2>
            </Animation>
            <Animation transition='fade-up'>
                <div className={styles.faqContainer}>
                    <FaqQuestion 
                        Question='Após o site ir pro ar, ainda poderei fazer alterações em minha página?' 
                        Answer='Sim. Você receberá acesso ao CMS (editor de conteúdo) para poder realizar atualizações em sua página. Ainda assim, poderá entrar em contato conosco sempre que precisar de suporte para utilização do CMS.'
                    />
                    <FaqQuestion 
                        Question='Quais as formas de pagamento?' 
                        Answer='Pix ( 50% de entrada e 50% na conclusão do serviço )'
                        Answer2='Cartão de crédito ( parcelamento em até 12x com juros pela plataforma do Mercado Pago )'
                    />
                    <FaqQuestion 
                        Question='Qual a ferramenta utilizada no desenvolvimento das páginas?' 
                        Answer='Utilizamos as linguagens de programação CSS e Javascript, e também a nova tecnologia pra construção de páginas otimizadas chamada Next.JS.'
                        Answer2='Essa nova tecnologia é utilizada em empresas como TikTok, Netflix, Twitch, HboMax, Nike, PlayStation, HostGator etc.'
                    />
                    <FaqQuestion 
                        Question='Posso pedir alteração na página?' 
                        Answer='Após a aprovação do projeto, você tem até 3 dias para solicitar as alterações.'
                    />
                    <FaqQuestion 
                        Question='Tem que pagar mensalidade?' 
                        Answer='Não cobramos mensalidade após a entrega do projeto, Caso o projeto tenha sido aprovado há mais de 3 dias e você queira modificar algo no layout terá que pagar uma taxa de manutenção.'
                    />
                </div>
            </Animation>

        </Content>
    </div>
  )
}

export default Faq
