import Image from 'next/image';
import Link from "next/link"
import React from 'react';
import styles from "./post.module.css";


function PostCard({ item: post , index, bgStyle }) {

    const { title, body, author, createdAt, description, slug } = post;

    console.log(slug)
    return (
      <div className={`${styles.container}`} style={bgStyle}>
        <span className={styles.number}>{index}</span>
        <div className={styles.contentWrapper}>
          <div style={{ paddingTop: "3px" }}>
            <div
              style={{
                display: "flex",
                alignContent: "baseline",
                justifyContent: "center",
              }}
            >
              <Image
                src={author.image || "/imgdefault.png"}
                width={20}
                height={20}
                className={styles.authorImage}
              />
              <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>
                {" "}
                {author.username}
              </span>
            </div>
            <span style={{ fontSize: "10px", color: "gray" }}>
              {new Date(createdAt).toDateString()}{" "}
            </span>
          </div>
          <h3
            style={{ margin: "10px 0", fontSize: "14px", fontWeight: "bolder" }}
          >
            {title}
          </h3>
          <p style={{ fontSize: "14px" }}>{description} ...</p>
          {slug && (
            <Link href={`/blog/${slug}`}>
              <a>
                <span style={{ fontSize: "12px", color: "#0FAD4C" }}>
                  Read more
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
    );
}

export default PostCard;