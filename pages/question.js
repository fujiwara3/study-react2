import styles from '../components/Main.module.css'

import Rokuga_Botton from '../components/Rokuga_Botton'
import Rokuga_Movie from '../components/Rokuga_Movie'

export default function Home() {

  return (
    <>
      
      <a href="/home" className={styles.anchor}>
        ロゴ
      </a>

      <a className={styles.title1}>
        次の言葉を手話で表現してください</a>

      <main className={styles.main}>

      
      <Rokuga_Movie/>

      <Rokuga_Botton/>

      </main>
    </>
  )
}