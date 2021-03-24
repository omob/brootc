import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import NavHeader from '../components/Header';
import Layout, { siteTitle} from '../components/Layout'
import PostCard from '../components/PostCard';
import styles from "./index.module.css";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   const getArticles = async () => {
     setLoading(true)
     const response =  await fetch("https://conduit.productionready.io/api/articles?limit=9");
     const { articles } = await response.json();
     setArticles(articles);
     console.log(articles);
    setLoading(false)
   }

   getArticles();
  }, [])

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout headerColorInverse>
        <div className={`${styles.container} ${styles.bgblue}`}>
          <div className={`${styles.headerSection} ${styles.containerMax}`}>
            <div className={`${styles.bulb} ${styles.smOnly}`}>
              <Image src={"/lightbulb2.svg"} width={400} height={400} />
            </div>
            <div>
              <h2>STRATEGY, INNOVATION & RESEARCH</h2>
              <p>
                We deploy both intuitive and analytical skills and continuously
                challenge current thinking to create a future not yet imagined
              </p>
            </div>
            <div className={`${styles.bulb} ${styles.lgOnly}`}>
              <Image src={"/lightbulb2.svg"} width={400} height={400} />
            </div>
          </div>
        </div>
        <div
          className={`${styles.container} ${styles.pt1}`}
          style={{ maxWidth: "1200px", margin: "auto" }}
        >
          <h3 style={{ textAlign: "center" }}>Now Trending on BrootC</h3>
          {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

          <div className={styles.articlesWrapper}>
            {articles &&
              articles.map((article, index) => (
                <PostCard key={index} index={"0" + ++index} item={article} />
              ))}
          </div>
        </div>
        <div
          className={`${styles.container} ${styles.pt1}`}
          style={{ backgroundColor: "#fafafa" }}
        >
          <h3 style={{ textAlign: "center" }}>Insights</h3>
          {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

          <div className={styles.articlesWrapper}>
            {/* {articles &&
              articles.map((article, index) => (
                <PostCard
                  bgStyle={{ backgroundColor: "#fff" }}
                  key={index}
                  index={"0" + ++index}
                  item={article}
                />
              ))} */}
          </div>
        </div>
      </Layout>
    </>
  );
}
