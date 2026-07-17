import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./about.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { COMPANY_INFO } from "@/utils/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SeismoTeck and our founder, Umesh Prasad Verma.",
};

export default function AboutPage() {
  const galleryItems = [
    {
      imagePath: "/assets/img8.jpg",
      caption: "With senior IPS officer",
      altText: "Founder with IPS officer",
    },
    {
      imagePath: "/assets/img11.jpg",
      caption: "Meeting with government officials",
      altText: "Founder with government official",
    },
    {
      imagePath: "/assets/img13.jpg",
      caption: "At a Founders Meet",
      altText: "Founder at Founders Meet event",
    },
    {
      imagePath: "/assets/img16.jpg",
      caption: "With military professionals & at Dept. of Industries, Govt. of Bihar",
      altText: "Collage of military professionals and Dept of Industries",
    },
    {
      imagePath: "/assets/img17.jpg",
      caption: "With senior diplomats at the Bihar Government office",
      altText: "Founder with diplomats in Bihar",
    },
  ];

  return (
    <div className={styles.page}>
      {/* 1. Page Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerBackground}>
          <Image
            src="/assets/img1.jpeg"
            alt="Background earth imagery"
            fill
            priority
            className={styles.bannerImage}
          />
          <div className={styles.bannerOverlay}></div>
        </div>
        <div className={styles.bannerContent}>
          <ScrollReveal>
            <h1 className={styles.bannerTitle}>About SeismoTeck</h1>
            <p className={styles.bannerSubtext}>
              Pioneering seismic research and earthquake prediction from the heart of India
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>Our Mission & Vision</h2>
              <p>
                {COMPANY_INFO.name} is a pioneering technology and research firm based in {COMPANY_INFO.location}. 
                Founded by Umesh Prasad Verma, an esteemed researcher and educator who developed the proprietary SAHAS Alert system.
              </p>
              <p>
                Our company specializes in advanced earthquake prediction utilizing satellite data, field-deployed IoT sensors, and multi-parametric analysis. 
                According to SeismoTeck&apos;s extensive research spanning over 10 years, the system is designed to forecast the time, location, and intensity of earthquakes in the Eastern Hemisphere with remarkable accuracy.
              </p>
              <p>
                The SAHAS Alert system is engineered to detect pre-seismic anomalies (such as underground rumbling sounds, thermal fluctuations, and radon emissions) within a 10–500 km radius. 
                Initial warnings are triggered 7 days to 2 days before an earthquake, culminating in a final alert approximately 1 minute prior to the event.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Founder Spotlight */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading title="Founder Spotlight" />
          </ScrollReveal>

          <div className={styles.founderGrid}>
            <ScrollReveal direction="right">
              <div className={styles.founderImageWrapper}>
                <Image
                  src="/assets/img10.jpg"
                  alt="Umesh Prasad Verma lecturing to students"
                  fill
                  className={styles.founderImage}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.founderBio}>
                <h3 className={styles.founderName}>Umesh Prasad Verma</h3>
                <h4 className={styles.founderTitle}>Founder & Lead Researcher</h4>
                <p>
                  An esteemed educator and dedicated seismology researcher based in Motihari, Bihar, Umesh Prasad Verma has committed over two decades to unraveling the complex patterns of seismic activity.
                </p>
                <p>
                  He has delivered countless lectures to engineering colleges and scientific institutions, advocating for a multi-parametric approach to earthquake prediction. His methodology goes beyond traditional seismology by incorporating IoT environmental data and satellite imaging.
                </p>
                <p>
                  He is the mastermind behind the SAHAS Alert system and the driving force of SASVC SeismoTech. His prediction methodology gained national attention when featured in the Times of India after successfully predicting a magnitude 6+ earthquake in Nepal within 48 hours.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Gallery of Recognition */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading 
              title="Recognition & Collaborations" 
              subtext="Building partnerships for disaster preparedness and seismic research."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <ImageGallery items={galleryItems} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
