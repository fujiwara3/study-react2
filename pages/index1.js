import { Inter } from '@next/font/google'
import styles from '../components/Main.module.css'
import Links from '../components/Links'
import Headline from '../components/Headline'
import Footer from '../components/Footer'
import Header from '../components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>

      <Headline title="Index Page" page="index"/>
      <main className={styles.main}>
        
        

        <Footer/>
        
        <Links/>
      </main>
    </>
  )
}