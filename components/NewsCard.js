import Link from 'next/link';
import React from 'react';

import styles from "./news.module.css";

function NewsCard({ item }) {

        const { title, body, author, createdAt, description, slug } = item;
    return (
      <div style={{ maxWidth: "300px", margin: "10px" }}>
        <span style={{ fontSize: "10px" }}>
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
              <a style={{color: "inherit"}}>Read More</a>
            </Link>
          </span>
        </div>
      </div>
    );
}

export default NewsCard;