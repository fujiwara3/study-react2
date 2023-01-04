import styles from '../components/Main.module.css'
import React, {useState, useCallback, useEffect} from  'react'
import Rokuga_Botton from '../components/Rokuga_Botton'
import Rokuga_Movie from '../components/Rokuga_Movie'
import styles1 from '../components/Home_Links.module.css'


export default function Home() {

  const[user, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch("../code.json")  
     .then((res)=>{
      return res.json();
     })
     .then((data)=>setUsers(data));
  },[]);

  console.log(user);

  

  const wordList = [];

  const [count, setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 10){
      setCount((count)=>count + 1);
    }
  }, [count]);


  
  

  return (
    <>
      
      <a href="/home" className={styles.anchor}>
        <p>ロゴ</p>
      </a>

      <a className={styles.title1}>
        次の言葉を手話で表現してください</a>

      <a className={styles.title2}>{count}</a>.
      


      {user.map((users)=>{

       wordList.push(users.word);

      })}
      

      <a className={styles.title5}>{wordList[count-1]}</a>
  

      <main1 className={styles.main1}>

      <Rokuga_Movie/>
      
      <Rokuga_Botton/>

      </main1>

      <a href="/2_test" className={styles.main2}>
        <p className={styles1.card}>問題選択に戻る</p>
      </a>
    
      
      <botton  onClick= {handleClick} className={styles.main3} >
        {count < 10 ? 
        <p className={styles1.card}>次の問題へ</p>
        : <a href="/4_answer" className={styles1.card}>採点</a>}
      </botton>


    </>
  )
}