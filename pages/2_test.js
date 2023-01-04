import styles from '../components/Main.module.css'
import Test_Links from '../components/Test_Links'


export default function Home() {

  return (
    <>
      
      <a href="/1_home" className={styles.anchor}>
        ロゴ
      </a>


      <a className={styles.title4}>問題選択</a>

      <main className={styles.main}>

      <Test_Links/>
      </main>
    </>
  )
}