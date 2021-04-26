import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact
          <br />
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
