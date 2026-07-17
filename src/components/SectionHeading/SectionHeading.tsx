import React from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  subtext?: string;
  alignment?: "left" | "center" | "right";
  preHeading?: string;
}

export default function SectionHeading({
  title,
  subtext,
  alignment = "center",
  preHeading,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.container} ${styles[alignment]}`}>
      {preHeading && <span className={styles.preHeading}>{preHeading}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </div>
  );
}
