import styles from '../components/Main.module.css'
import Home_Links from '../components/Home_Links'
import Headline from '../components/Headline'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Botton1 from '../components/Botton1'

export default function Home() {
  return (
    <>   
  
      <Header/>

      <Botton1/>

      <Headline title = "About Pege" page="about"/>
      <main className={styles.main}>
        
        <Footer/>

        <Home_Links/>
        
      </main>
    </>
  )
}
