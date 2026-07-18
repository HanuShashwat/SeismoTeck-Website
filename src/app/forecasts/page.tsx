import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./forecasts.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata: Metadata = {
  title: "Forecasts & Case Studies",
  description: "Review SeismoTeck's track record of verified earthquake forecasts and case studies.",
};

export default function PredictionsPage() {
  return (
    <div className={styles.page}>
      {/* 1. Page Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <ScrollReveal>
            <h1 className={styles.bannerTitle}>Forecasts & Case Studies</h1>
            <p className={styles.bannerSubtext}>
              Real-world validations of our multi-parametric forecasting models
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className={styles.container}>
        {/* Case Study 1: Philippine Archipelago */}
        <section className={styles.caseStudySection}>
          <ScrollReveal>
            <SectionHeading title="Case Study 1: Philippine Archipelago" alignment="left" />
          </ScrollReveal>
          
          <div className={styles.contentGrid}>
            <ScrollReveal direction="right">
              <div className={styles.imageWrapper}>
                <Image src="/assets/img6.jpg" alt="Philippine Archipelago dashboard" fill className={styles.image} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.textContent}>
                <p>
                  During the assessment window of May 25 to June 8, the SAHAS Alert system detected critical anomalies in the Philippine Archipelago seismic zone.
                </p>
                <ul className={styles.dataList}>
                  <li><strong>KP Index:</strong> 6.8 (Storm Level) indicates high solar magnetic interference.</li>
                  <li><strong>Lunar Phase:</strong> Last quarter, causing 62% increasing tidal loading on tectonic plates.</li>
                  <li><strong>Outcome:</strong> A significant seismic event occurred perfectly within the forecasted timeframe and region.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Study 2: 2026 Mindanao Earthquake */}
        <section className={styles.caseStudySection}>
          <ScrollReveal>
            <SectionHeading title="Case Study 2: Mindanao Earthquake" alignment="left" />
          </ScrollReveal>

          <div className={styles.contentGrid}>
            <ScrollReveal direction="right">
              <div className={styles.imageWrapper}>
                <Image src="/assets/img4.jpeg" alt="2026 Mindanao earthquake Wikipedia article" fill className={styles.image} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.textContent}>
                <p>
                  The magnitude 6.9 earthquake in Glan, Sarangani was successfully forecasted by SeismoTeck.
                </p>
                <p>
                  By analyzing underground thermal fluctuations alongside radon gas emissions from local IoT sensors, our team was able to issue an advance warning before the devastating tremor struck.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Study 3: Japan & Venezuela Interconnectivity */}
        <section className={styles.caseStudySection}>
          <ScrollReveal>
            <SectionHeading title="Case Study 3: Japan & Venezuela Interconnectivity" alignment="left" />
          </ScrollReveal>

          <div className={styles.contentGrid}>
            <ScrollReveal direction="right">
              <div className={styles.imageWrapper}>
                <Image src="/assets/img7.jpg" alt="Japan and Venezuela earthquake data" fill className={styles.image} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.textContent}>
                <p>
                  On a single day, the system correlated a magnitude 6.9 earthquake in the Noda, Japan region with a preceding magnitude 7.1 earthquake in Moron, Venezuela.
                </p>
                <p>
                  This case study highlighted our system&apos;s capability to track tectonic stress transfer across global fault lines, proving that seismic events are often globally interconnected.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* Disclaimer */}
      <section className={styles.disclaimerSection}>
        <div className={styles.container}>
          <p className={styles.disclaimerText}>
            <strong>Disclaimer:</strong> The forecasts and case studies presented on this website reflect the independent research and technological capabilities of SASVC SeismoTech. They are intended for research, educational, and preparedness purposes. Official government alerts should always take precedence during emergencies.
          </p>
        </div>
      </section>
    </div>
  );
}
