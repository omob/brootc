import Link from 'next/link';
import React from 'react';

import styles from "./news.module.css";

function NewsCard({ item }) {

        const { title, body, author, createdAt, description, slug } = item;
    return (
      <div className={styles.container}>
        <span style={{ fontSize: "10px", color: "gray", fontWeight: "100" }}>
          {new Date(createdAt).toDateString()}
        </span>
        <div
          style={{
            height: "150px",
            backgroundColor: "#fafafa",
            marginTop: "10px",
          }}
        ></div>
        <div style={{ display: "flex" }}>
          <h3 style={{ fontSize: "14px", width: "90%" }}>{title}</h3>
          <span
            style={{
              fontSize: "12px",
              width: "150px",
              marginTop: "15px",
              textAlign: "right",
            }}
          >
            <Link href={`/blog/${slug}`}>
              <a style={{ color: "gray", fontSize: "10px", fontWeight: "100", border: "1px solid", borderRadius: "20px", padding: "2px 8px" }}>Read More</a>
            </Link>
          </span>
        </div>
      </div>
    );
}
export default NewsCard;