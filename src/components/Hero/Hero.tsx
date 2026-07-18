import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { COMPANY_INFO } from "../../utils/constants";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <Image
          src="/assets/img1.jpeg"
          alt="Satellite view of Earth from space at night with India highlighted by a glowing network of seismic monitoring nodes"
          fill
          priority
          quality={90}
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <span className={styles.preHeading}>{COMPANY_INFO.name}</span>
          <h1 className={styles.title}>
            Pioneering Earthquake Forecast Through Advanced Seismic Research
          </h1>
          <p className={styles.subtext}>
            Leveraging IoT sensors, satellite data, and multi-parametric analysis to forecast seismic activity with unprecedented accuracy.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/technology" className={`${styles.btn} ${styles.btnPrimary}`}>
              Explore Our Technology
            </Link>
            <Link href="/forecasts" className={`${styles.btn} ${styles.btnSecondary}`}>
              View Forecasts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
