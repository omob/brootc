import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/router";

import styles from "./header.module.css";

const NavHeader = ({ invertColor }) => {
const router = useRouter();

    return (
      <div
        className={styles.container}
        style={{ backgroundColor: invertColor ? "#273883" : "#fff" }}
      >
        <header className={[styles.header]}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={invertColor ? "/logo2.png" : "/logo1.png"}
                  height={126}
                  width={148}
                />
              </a>
            </Link>
          </div>
          <div>
            <ul style={{ color: invertColor ? "#fff" : "#000" }}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {/* <li>Services</li> */}
              <li>
                  Insights & Blog
              </li>
              {/* <li>Career</li> */}
              {/* <li>Contact</li> */}
            </ul>
          </div>
        </header>
      </div>
    );
}
 
export default NavHeader;