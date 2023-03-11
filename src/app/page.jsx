import dynamic from 'next/dynamic'
import Home from '@/components/home/Home'
import Introduction from '@/components/Introduction/Introduction'
import Header from '@/components/header/Header'
import ButtonFloating from '@/components/Buttons/CTA_Home/CTA_Floating/Button'
import Benefits from '@/components/benefits/Benefits'
export const revalidate = 10

export default function App() {
    const Steps = dynamic(()=> import( '../components/Steps/Steps'))
    const Faq = dynamic(()=> import( '../components/faq/Faq'))
    const Portfolio = dynamic(()=> import( '../components/portfolio/Portfolio'))
    const Prices = dynamic(()=> import( '../components/prices/Prices'))
    const Footer = dynamic(()=> import( '../components/Footer/Footer'))

  return (
    <>
        <Header/>
        <main>
            <ButtonFloating/>
            <Home/>
            {/* <Introduction/> */}
            {/* <Steps/> */}
            <Benefits/>
            <Portfolio/>
            <Prices/>
            <Faq/>
        </main>
        <Footer/>
    </>
  )
}
