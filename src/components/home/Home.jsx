import Image from 'next/image'
import { getHome } from '../../../services/fetch'
import Animation from '../Animation'
import Button from '../Buttons/CTA_Home/Button'
import Content from '../content/Content'
import styles from '../home/Home.module.sass'

export default async function Home() {

    const home = await getHome()
    const Styles = styles.home

  return (
    <div className={`${Styles} lightMode`}>

        <Content>
            <Animation transition='fade-right'>
                <div className={styles.disclaimer}>
                    <h1>Agora seu produto venderá muito mais com uma página de vendas <span>PROFISSIONAL</span> e <span>PERSUASIVA</span></h1>
                    <p>{home.subheadline}</p>
                    <Button>{home.button}</Button>
                </div>
            </Animation>

            <Animation transition='zoom-in-right'>
                <div className={styles.image}>
                    <Image quality={70} src={home.image.url} alt='' width={535} height={535} priority 
                        sizes="(min-width: 601px) 535px, (max-width: 600px) 250px"/>
                </div>
            </Animation>

        </Content>
    </div>
  )
}
