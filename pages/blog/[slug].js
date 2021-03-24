import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from "next/router";
import styles from "./blog.module.css";

export async function getStaticProps({ params }) {

     const response = await fetch(
       `https://conduit.productionready.io/api/articles/${params.slug}`
     );
     const postData = await response.json();

     console.log(postData);

  return {
    props: {
      postData
    },
  };
}

export async function getStaticPaths() {
   const response = await fetch(
     "https://conduit.productionready.io/api/articles?limit=9"
   );
   const { articles } = await response.json();
   
   const slugs = articles.map(article => ({
       params: {
           slug: article.slug
       }
   }))

  return {
    paths: slugs,
    fallback: true,
  };
}

function BlogDetail({ postData }) {

  // console.log("PST DATA", postData)
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [article, setArticle] = useState(postData?.article);

useEffect(() => {

  const getArticle = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://conduit.productionready.io/api/articles/${query.slug}`
      );
      const { article } = await response.json();
      setArticle(article);
      console.log(article);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong... Try again later.");
      console.log(error);
    }
  };

  getArticle();
}, []);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Layout>
        {error && <p style={{ textAlign: "center" }}>{error}</p>}

        {article && (
          <>
            <div
              className={`${styles.container}`}
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div className={`${styles.containerMax}`}>
                <div className={`${styles.headerSection}`}>
                  <p
                    style={{
                      fontSize: "14px",
                      textAlign: "right",
                      width: "100%",
                    }}
                  >
                    {new Date(article.createdAt).toDateString()}
                  </p>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Image
                      src={article.author?.image || "/imgdefault.png"}
                      width={50}
                      height={50}
                      className={styles.authorImage}
                    />
                    <span
                      style={{
                        marginLeft: "5px",
                        textTransform: "capitalize",
                        fontWeight: "100",
                        fontSize: "16px",
                      }}
                    >
                      {" "}
                      {article.author?.username}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", margin: "3em" }}>
              <Image src="/lightbulb.svg" width="400" height="400" />

              <p style={{lineHeight: "1.8em", maxWidth: "800px", margin: "2em auto"}}>{article.body}</p>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}

export default BlogDetail;