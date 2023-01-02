import styles from '../components/Botton1.module.css'
import{useState, useCallback} from "react"


export default function Botton1() {

  const [count, setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 10){
      setCount(count + 1);
    }
  }, [count]);


  return (
    <>

      <header className={styles.header}>
        <h1>{count}</h1>
        <botton  onClick= {handleClick} className={styles.anchor}>
          ボタン
        </botton>
      </header>
      
      <botton>
        {count < 10 ? "次へ" : "進む"}
      </botton>

   
    </>
  )
}