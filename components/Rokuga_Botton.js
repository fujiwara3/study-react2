import styles from '../components/Rokuga_Botton.module.css'
import Image from 'next/image'
import{useState, useCallback} from "react"



export default function Rokuga_Botton() {
  
  const [count, setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 100){
      setCount(count + 1);
    }
  }, [count]);



  return (
    <>

      <div className={styles.card}>
        <botton  onClick= {handleClick} className={styles.anchor}>
        <Image
                src="/Snapshot2.png"
                alt="Vercel Logo"
                width={100}
                height={60}
                priority
              />
        </botton>
      </div>

      <botton>
        {count % 2 ? "録画開始" : "録画停止"}
      </botton>


    
    </>
  )
}