import styles from '../components/Main.module.css'
import React, {useState, useCallback, useEffect} from  'react'
import Answer_Movie from '../components/Answer_Movie'
import styles1 from '../components/Home_Links.module.css'


export default function Home() {


  const[user, setUsers] = useState([]);

  useEffect(()=>{
    fetch("/code.json")  
     .then((res)=>{
      return res.json();
     })
     .then((data)=>setUsers(data));
  },[]);

  
  const wordList = [];
  

  const [count, setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 10){
      setCount((count)=>count + 1);
    }
  }, [count]);

  

  return (
    <>
      
      <a href="/1_home" className={styles.anchor}>
        <p>ロゴ</p>
      </a>

      <br></br>

      <a className={styles.title2}>{count}</a>.
      

      {user.map((users)=>{

       wordList.push(users.word);

      })}
      

      <a className={styles.title5}>{wordList[count-1]}</a>


      <a className={styles.title6}>
        採点</a>


      <main1 className={styles.main1}>

      <Answer_Movie string = {wordList[count-1]}/>

      </main1>


      <div className={styles.title8}>

        <a className={styles.title7}>あなたの解答</a>

        <a className={styles.title7}>模範解答</a>

      </div>

      <a href="/2_test" className={styles.main2}>
        <p className={styles1.card}>問題選択に戻る</p>
      </a>
    
      
      
      <botton  onClick= {handleClick} className={styles.main3} >
        {count < 10 ? 
        <p className={styles1.card}>次の問題へ</p>
        : <a href="/1_home" className={styles1.card}>ホームへ戻る</a>}
      </botton>


    </>
  )
}