import Image from 'next/image';
import React from 'react';

import styles from "./header.module.css";

const NavHeader = ({ invertColor }) => {
    return (
      <div
        className={styles.container}
        style={{ backgroundColor: invertColor ? "#273883" : "" }}
      >
        <header className={[styles.header]}>
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
      </div>
    );
}
 
export default NavHeader;