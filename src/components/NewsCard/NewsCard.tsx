import React from "react";
import Image from "next/image";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  imagePath: string;
  title: string;
  description: string;
  altText: string;
}

export default function NewsCard({ imagePath, title, description, altText }: NewsCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
