import styles from '../components/Main.module.css'
import{useState, useCallback} from "react"
import Rokuga_Botton from '../components/Rokuga_Botton'
import Rokuga_Movie from '../components/Rokuga_Movie'

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 10){
      setCount(count + 1);
    }
  }, [count]);

  return (
    <>
      
      <a href="/home" className={styles.anchor}>
        ロゴ
      </a>

      <a className={styles.title1}>
        次の言葉を手話で表現してください</a>

     
      <a className={styles.title2}>{count}</a>.
      
      <a className={styles.title2}>question</a>

      <main1 className={styles.main1}>

      <Rokuga_Movie/>

      <Rokuga_Botton/>

      </main1>

      
      <a href="/test" className={styles.main2}>
       問題選択に戻る
      </a>
    
      
      
      <botton  onClick= {handleClick} className={styles.main3} >
        次の問題へ
      </botton>
      
      
      

    </>
  )
}