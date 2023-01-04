import styles from '../components/Movie.module.css'
import Image from 'next/image'


export default function Answer_Movie(props) {

  return (
    <>
        <div >
            <a className={styles.main}>
             <Image
             src="/Movie2.png"
             alt="Vercel Logo"
             width={660}
             height={392}
             priority
            />
            </a>

            
            <a className={styles.main}>
             <video
             controls src={"/" + props.string + ".mp4"}
             alt="Vercel Logo"
             width={660}
             height={410}
             priority
            />
            </a>

            
        </div>
     
      
    </>
  )
}