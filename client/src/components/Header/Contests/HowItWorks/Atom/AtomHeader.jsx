import React from "react";
import styles from "./AtomHeader.module.css";

const AtomHeader = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.headerBlock}>
        <div className={styles.headerContent}>
          <a
            className={styles.headerLink}
            href="https://www.atom.com/blog/discover-atom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Squadhelp is now Atom
            <span className={styles.mobilePart}> - where everything starts!</span>
          </a>
          <button className={styles.headerButton}>
            <a href="https://www.atom.com/blog/discover-atom/">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AtomHeader;
