import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  imagePath: string;
  title: string;
  description: string;
  altText: string;
}

export default function Card({ imagePath, title, description, altText }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
