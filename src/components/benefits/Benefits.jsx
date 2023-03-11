
import Image from 'next/image'
import { getBenefits } from '../../../services/fetch'
import Animation from '../Animation'
import Content from '../content/Content'
import styles from '../benefits/Benefits.module.sass'

export const revalidate = 10
export default async function Benefits() {

    const data = await getBenefits()
    const Styles = styles.benefits

  return (
    <div className={`${Styles} darkMode`}>

        <Content>

        <Animation transition='fade-up'>
            <h2>{data.benefitsText.h2}</h2>
            <p>{data.benefitsText.paragraph}</p>

            <div className={styles.benefitsContainer}>
                {data.allBenefits.map((benefit,index)=>(
                    <div key={index} className={styles.benefitCard}>
                        <Image src={benefit.benefitIcon.url} height={40} width={100} alt='icon'/>
                        <span>{benefit.benefitName}</span>
                        <p>{benefit.benefitDescription}</p>
                    </div>
                ))}

            </div>
        </Animation>

        </Content>
    </div>
  )
}
