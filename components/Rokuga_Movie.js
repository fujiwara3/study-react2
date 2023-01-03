import styles from '../components/Rokuga_Movie.module.css'
import Image from 'next/image'


export default function Rokuga_Movie() {

  return (
    <>
      
      <div >
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
         
              <Image
                src="/Movie2.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={680}
                height={465}
                priority
              />
            </a>
          </div>
        </div>
      
    </>
  )
}