import React from "react";
import styles from "./NewsTicker.module.css";

const NEWS_ITEMS = [
  "ALERT: 2026 Mindanao Earthquake (Magnitude 6.9) — Successfully forecasted by SAHAS Alert System",
  "SeismoTeck's IoT sensor network now deployed across 15+ monitoring stations in Bihar and Uttarakhand",
  "Founder UP Verma's earthquake forecast for Nepal (Magnitude 6+) confirmed within 48 hours — Times of India",
  "New partnership with Bihar State Disaster Management Authority (BSDMA) for early warning systems",
];

export default function NewsTicker() {
  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerLabel}>LATEST UPDATES</div>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerContent}>
          {/* Double the items for seamless looping */}
          {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, index) => (
            <span key={index} className={styles.tickerItem}>
              {item}
              <span className={styles.separator}>•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
