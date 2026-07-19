'use client'
import React, { useState, useEffect } from "react";
import styles from "./NewsTicker.module.css";

const NEWS_ITEMS = [
  "ALERT: 2026 Mindanao Earthquake (Magnitude 6.9) — Successfully forecasted by SAHAS Alert System",
  "SeismoTeck's IoT sensor network now deployed across 15+ monitoring stations in Bihar and Uttarakhand",
  "Founder UP Verma's earthquake forecast for Nepal (Magnitude 6+) confirmed within 48 hours — Times of India",
  "New partnership with Bihar State Disaster Management Authority (BSDMA) for early warning systems",
];

export default function NewsTicker() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle news items every 5 seconds for the mobile card view
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % NEWS_ITEMS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      
      {/* =========================================
          DESKTOP VIEW: Horizontal Ticker
          ========================================= */}
      <div className={styles.desktopTicker}>
        <div className={styles.tickerLabel}>
          <span className={styles.pulseDot}></span>
          <span className={styles.labelText}>LATEST UPDATES</span>
        </div>
        <div className={styles.tickerWrapper}>
          <div className={styles.tickerContent}>
            {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, index) => (
              <span key={index} className={styles.tickerItem}>
                {item}
                <span className={styles.separator}></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW: Fading Notification Card
          ========================================= */}
      <div className={styles.mobileCard}>
        <div className={styles.cardHeader}>
          <span className={styles.pulseDot}></span>
          <span className={styles.cardLabel}>LIVE UPDATE</span>
        </div>
        
        {/* Changing the key forces React to re-mount the element, triggering the CSS animation */}
        <div className={styles.cardBody} key={activeIndex}>
          <p className={styles.cardText}>{NEWS_ITEMS[activeIndex]}</p>
        </div>

        <div className={styles.progressIndicators}>
          {NEWS_ITEMS.map((_, idx) => (
            <span 
              key={idx} 
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}