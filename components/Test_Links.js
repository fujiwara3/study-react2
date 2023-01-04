import styles from '../components/Test_Links.module.css'


const ITEMS =[
  {
    
    href: "",
    title: "Ⅰの形式",
  },
  {
    href: "/3_test_question",
    title: "Ⅱの形式"
  },
  {
    href: "",
    title: "Ⅲの形式"
  },
  {
    href: "",
    title: "Ⅳの形式"
  }
]

export default function Test_Links() {
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