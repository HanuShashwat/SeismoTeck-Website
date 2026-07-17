import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./media.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import NewsCard from "@/components/NewsCard/NewsCard";
import VideoEmbed from "@/components/VideoEmbed/VideoEmbed";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata: Metadata = {
  title: "Media & Recognition",
  description: "News articles, press coverage, and media highlights of SeismoTeck.",
};

export default function MediaPage() {
  return (
    <div className={styles.page}>
      {/* 1. Page Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <ScrollReveal>
            <h1 className={styles.bannerTitle}>Media & Recognition</h1>
            <p className={styles.bannerSubtext}>
              Press coverage, interviews, and public awareness campaigns
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Featured Video */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading title="Featured Interview" />
            <div className={styles.videoContainer}>
              <VideoEmbed
                embedId="Uc38C2OJFyg"
                title="HTV News: Earthquake Prediction Analysis by Umesh Prasad Verma"
                description={`This news report covers Umesh Prasad Verma's earthquake prediction methodology, based on over 20 years of research. \n\nThe report discusses forecasts for the India-Pakistan border region and other seismically active zones.`}
                disclaimer="Disclaimer: The predictions in this video are based on independent research and are not verified by official government seismology departments."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. News Articles */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading title="In the News" />
          </ScrollReveal>
          
          <div className={styles.newsGrid}>
            <ScrollReveal direction="up" delay={100}>
              <NewsCard
                imagePath="/assets/img12.jpg"
                title="Times of India: Teacher's Earthquake Forecast Comes True"
                description="'Motihari school teacher Umesh Prasad Verma predicted an earthquake of magnitude above six would hit Nepal within 48 hours' — and it came true. This verified prediction brought national attention to the SAHAS Alert system."
                altText="Times of India article screenshot"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <NewsCard
                imagePath="/assets/img4.jpeg"
                title="2026 Mindanao Earthquake Predicted"
                description="The magnitude 6.9 earthquake in Glan, Sarangani was successfully predicted. Our multi-parametric monitoring dashboard detected pre-seismic anomalies days in advance."
                altText="2026 Mindanao earthquake article"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Public Awareness Posters */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading 
              title="Public Awareness Campaigns" 
              subtext="Educational materials and alerts distributed for community safety."
            />
          </ScrollReveal>
          
          <div className={styles.posterGrid}>
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.posterItem}>
                <div className={styles.posterImageWrapper}>
                  <Image src="/assets/img9.jpg" alt="Earthquake warning poster (Hindi)" fill className={styles.image} />
                </div>
                <p className={styles.caption}>Public Earthquake Warning Poster (Hindi)</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.posterItem}>
                <div className={styles.posterImageWrapper}>
                  <Image src="/assets/img15.jpg" alt="SAHAS Alert system poster" fill className={styles.image} />
                </div>
                <p className={styles.caption}>SAHAS Alert System Educational Poster</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
