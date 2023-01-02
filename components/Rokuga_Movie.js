import styles from '../components/Rokuga_Movie.module.css'
import Image from 'next/image'


export default function Rokuga_Movie() {

  return (
    <>
      
      <div className={styles.description}>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
         
              <Image
                src="/Movie2.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={500}
                height={340}
                priority
              />
            </a>
          </div>
        </div>
      
    </>
  )
}