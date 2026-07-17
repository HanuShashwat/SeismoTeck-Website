import React from "react";
import Image from "next/image";
import styles from "./TeamCard.module.css";

interface TeamCardProps {
  imagePath: string;
  name: string;
  title: string;
  altText: string;
}

export default function TeamCard({ imagePath, name, title, altText }: TeamCardProps) {
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
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
