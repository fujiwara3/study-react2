import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Links from '../components/Links'
import Headline from '../components/Headline'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Headline title="Index Page" page="index"/>
      <main className={styles.main}>
        

        <Footer/>
        
        <Links/>
      </main>
    </>
  )
}