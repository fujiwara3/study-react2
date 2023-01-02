import styles from '../components/Rokuga_Botton.module.css'
import Image from 'next/image'

export default function Rokuga_Botton() {

function test(){
    console.log('click!!');
}

  return (
    <>


      <div className={styles.card}>
          <div>
             <button onClick= {test()} 
             target="_blank"
             rel="noopener noreferrer">
              
              <Image
                src="/Snapshot2.png"
                alt="Vercel Logo"
                
                width={100}
                height={60}
                priority
              />
             </button>
          </div>
     </div>


    
    </>
  )
}