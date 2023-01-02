import classes from '../components/Header.module.css'
import Link from "next/link";





export default function Header() {
  return (
    <>
    <header className={classes.header}>
        <Link href="/index1" className={classes.anchor}>
            Index
        </Link>

        <Link href="/about" className={classes.anchor}>
            About
        </Link>
    </header>
    </>
  )
}
