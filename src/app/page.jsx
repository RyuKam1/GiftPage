import React from "react";
import styles from "./page.module.css";

const links = [
  "https://www.youtube.com/watch?v=q-Y0bnx6Ndw",
  "https://www.youtube.com/watch?v=5w1W1t_3WBo",
  "https://www.youtube.com/shorts/38Nn50S5kWg",
  "https://www.youtube.com/watch?v=De6rxtML3JI",
];

function page() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.pressLeft}>
          <h1 className={styles.press}>Press</h1>
          <img src="right.png" alt="arrow" className={styles.arrow} />
        </div>
        <div className={styles.imgContainer}>
          <a href={`${links[Math.floor(Math.random() * links.length)]}`}>
            <img src="giftBox.png" alt="gift" className={styles.image} />
          </a>
        </div>
        <div className={styles.pressRight}>
          <img src="left.png" alt="arrow" className={styles.arrow} />
          <h1 className={styles.press}>Press</h1>
        </div>
      </div>
    </div>
  );
}

export default page;
