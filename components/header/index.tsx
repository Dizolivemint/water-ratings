import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Water Ratings"
          width={200}
          height={50}
        />
      </Link>
      <Link href="/map">
        Map
      </Link>
    </header>
  );
}
