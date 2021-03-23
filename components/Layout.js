import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

const name = "Ayodeji Abodunrin";
export const siteTitle = "Broot Consulting";

export default function Layout({ children, home, bgColor }) {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image priority src="/logo2.png" height={126} width={148} />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Insights & Blog</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
}
