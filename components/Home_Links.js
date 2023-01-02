import styles from '../components/Home_Links.module.css'


const ITEMS =[
  {
    
    href: "",
    title: "学習",
  },
  {
    href: "/test",
    title: "テスト"
  }
]

export default function Home_Links() {
  return (
    <>
     
        <div className={styles.grid}>
          {ITEMS.map(item=>{
            return(
              <a href={item.href} className={styles.card}>
              <h2 className={styles.title}>{item.title}</h2>
          </a>
            )
          })}
        </div>
      
    </>
  )
}