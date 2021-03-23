import Head from 'next/head'
import Image from 'next/image'
import NavHeader from '../components/Header';
import Layout, { siteTitle} from '../components/Layout'
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout headerColorInverse>
        <div className={styles.container}>
          <div className={styles.headerSection}>
            <div>
              <h2>STRATEGY, INNOVATION & RESEARCH</h2>
              <p>
                We deploy both intuitive and analytical skills and continuously
                challenge current thinking to create a future not yet imagined
              </p>
            </div>
            <div>
              <Image src={"/lightbulb2.svg"} width={400} height={400} />
            </div>
          </div>
        </div>
        <div className={styles.blogContainer}>
          <h3>Now Trending on BrootC</h3>
        </div>
      </Layout>
    </>
  );
}
