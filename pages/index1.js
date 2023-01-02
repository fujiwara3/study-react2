import { Inter } from '@next/font/google'
import styles from '../components/Main.module.css'
import Links from '../components/Links'
import Headline from '../components/Headline'
import Footer from '../components/Footer'
import Header from '../components/Header'
import{useState, useCallback} from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 10){
      setCount(count + 1);
    }
  }, [count]);


  return (
    <>
      <Header/>

      <header className={styles.header}>
        <h1>{count}</h1>
        <botton  onClick= {handleClick} className={styles.anchor}>
          ボタン
        </botton>
      </header>
      
      <botton>
        {count < 10 ? "次へ" : "進む"}
      </botton>

      <Headline title="Index Page" page="index"/>
      <main className={styles.main}>

      <Footer/>
      <Links/>
      </main>
    </>
  )
}