import Animation from '../Animation'
import Content from '../content/Content'
import styles from '../Introduction/Introduction.module.sass'

export default async function Introduction() {

    const Styles = styles.introduction

  return (
    <div className={`${Styles} darkMode`}>

        <Content>
            <Animation transition='fade-up'>
                <p>
                    O multimilionário Bill Gates, CEO da Microsoft, disse a seguinte frase: “Em alguns anos vão existir dois tipos de empresas. As que fazem negócios pela internet e as que estão fora dos negócios”
                </p>
                <p>
                    Agora pulamos pra 2023 e descobrimos que essa previsão estava 200% correta.
                </p>
                <p>
                    Se você possui um curso online ou algum infoproduto e não possui uma landing page de alta conversão, você está perdendo muito dinheiro, já que seus concorrentes possuem uma.
                </p>
                <p>
                    Tenha sua página no ar sem precisar gastar um centavo com domínio e hospedagem.
                </p>
                <p>
                    Utilizamos as linguagens de programação mais modernas pra criar a página de vendas ou captura perfeita.
                </p>
            </Animation>

        </Content>
    </div>
  )
}
