import React from "react";
import styles from "./VideoEmbed.module.css";

interface VideoEmbedProps {
  embedId: string;
  title: string;
  description?: string;
  disclaimer?: string;
}

export default function VideoEmbed({ embedId, title, description, disclaimer }: VideoEmbedProps) {
  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <div className={styles.description}>
            {description.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
        {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
      </div>
    </div>
  );
}
