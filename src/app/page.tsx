import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Link href={'/products'} className={styles.btn}>На страницу продуктов</Link>
        </div>
      </main>
    </div>
  );
}
