import styles from '../components/Main.module.css'
import Home_Links from '../components/Home_Links'


export default function Home() {

  return (
    <>

      <a className={styles.title3}>タイトル</a>

      <main className={styles.main}>
     
      <Home_Links/>
      </main>
    </>
  )
}