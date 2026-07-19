"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StatCounter.module.css";
import { STATS } from "../../utils/constants";

export default function StatCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 } // Trigger a bit earlier so it's ready when scrolling
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statItem} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}