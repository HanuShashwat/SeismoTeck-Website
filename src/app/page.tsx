import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import NewsTicker from "@/components/NewsTicker/NewsTicker";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Card from "@/components/Card/Card";
import StatCounter from "@/components/StatCounter/StatCounter";
import VideoEmbed from "@/components/VideoEmbed/VideoEmbed";
import NewsCard from "@/components/NewsCard/NewsCard";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: News Ticker */}
      <NewsTicker />

      {/* Section 3: Key Innovations Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading
              title="Our Innovations"
              subtext="Advanced technology driving the future of earthquake prediction"
            />
          </ScrollReveal>

          <div className={styles.grid3}>
            <ScrollReveal delay={100}>
              <Card
                imagePath="/assets/img2.jpeg"
                title="Advanced Seismic Imaging & Plate Tectonic Modeling"
                description="Our proprietary software analyzes tectonic plate movements, fault line stress, and historical seismic data to model earthquake probability in real time."
                altText="Earth with tectonic plates and dashboard overlays"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card
                imagePath="/assets/img3.jpeg"
                title="IoT-Based Geophysical Monitoring"
                description="Solar-powered IoT sensors deployed in field locations acquire real-time geophysical data including radon levels, CO₂ emissions, thermal anomalies, and ground water fluctuations."
                altText="IoT sensor field deployment"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Card
                imagePath="/assets/img5.jpg"
                title="Multi-Parametric Monitoring Dashboard"
                description="Our SAHAS Alert dashboard tracks multiple seismic parameters across different regions — including Radon, CO₂, Thermal, TEC-V, MF2, and water table fluctuations — for comprehensive pre-seismic analysis."
                altText="Multi-location earthquake dashboard"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Prediction Highlight */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <div className={styles.featuredGrid}>
            <ScrollReveal direction="right">
              <div className={styles.featuredImageWrapper}>
                <Image
                  src="/assets/img6.jpg"
                  alt="Philippine seismic zone dashboard"
                  fill
                  className={styles.featuredImage}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.featuredContent}>
                <span className={styles.accentLabel}>FEATURED CASE STUDY</span>
                <h2 className={styles.featuredTitle}>Philippine Archipelago Seismic Zone — Critical Assessment</h2>
                <ul className={styles.featureList}>
                  <li>Advanced multi-parametric monitoring dashboard</li>
                  <li>KP Index tracking: 6.8 (Storm Level)</li>
                  <li>Lunar phase correlation: Last quarter — 62% increasing tidal loading</li>
                  <li>Real-time analysis: May 25 to June 8 assessment window</li>
                  <li>99% success rate in Eastern Hemisphere earthquake forecasting</li>
                </ul>
                <Link href="/predictions" className={styles.linkButton}>
                  View All Predictions →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 5: Statistics / Impact Counter */}
      <StatCounter />

      {/* Section 6: Media & Recognition Preview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading
              title="Media & Recognition"
              subtext="Coverage of our pioneering research"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.videoSection}>
              <VideoEmbed
                embedId="Uc38C2OJFyg"
                title="HTV News: Earthquake Prediction Analysis by Umesh Prasad Verma"
                description={`A news report covering Umesh Prasad Verma's earthquake prediction methodology, based on 20 years of research. The report discusses forecasts for the India-Pakistan border region and other seismically active zones.`}
              />
            </div>
          </ScrollReveal>

          <div className={styles.grid2}>
            <ScrollReveal delay={200} direction="up">
              <NewsCard
                imagePath="/assets/img12.jpg"
                title="Times of India: Teacher's Earthquake Forecast Comes True"
                description="'Motihari school teacher Umesh Prasad Verma predicted an earthquake of magnitude above six would hit Nepal within 48 hours' — and it came true."
                altText="Times of India article"
              />
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up">
              <NewsCard
                imagePath="/assets/img4.jpeg"
                title="2026 Mindanao Earthquake — Predicted by SAHAS Alert"
                description="The magnitude 6.9 earthquake in Glan, Sarangani was successfully predicted using SeismoTeck's multi-parametric monitoring system."
                altText="2026 Mindanao earthquake Wikipedia"
              />
            </ScrollReveal>
          </div>
          
          <div className={styles.centerAction}>
            <Link href="/media" className={styles.linkButton}>
              View All Media →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action / Contact Teaser */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Partner with Us for a Safer Tomorrow</h2>
              <p className={styles.ctaSubtext}>
                Explore collaboration opportunities in earthquake prediction research, IoT sensor deployment, and disaster preparedness.
              </p>
              <Link href="/contact" className={styles.primaryButton}>
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
