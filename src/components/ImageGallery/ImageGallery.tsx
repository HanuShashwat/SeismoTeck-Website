import React from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

interface GalleryItem {
  imagePath: string;
  caption: string;
  altText: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className={styles.gallery}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src={item.imagePath}
              alt={item.altText}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
          <p className={styles.caption}>{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
