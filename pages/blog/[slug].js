import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout';

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
    fallback: false,
  };
}

function BlogDetail({ postData }) {
  const { title, body, createdAt, description, author } = postData.article;

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
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
                {new Date(createdAt).toDateString()}
              </p>
              <h2>{title}</h2>
              <p>
                {description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Image
                  src={author?.image || "/imgdefault.png"}
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
                  {author?.username}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "3em" }}>
          <Image src="/lightbulb.svg" width="400" height="400" />

          <p>
              {body}
          </p>
        </div>
      </Layout>
    </>
  );
}

export default BlogDetail;