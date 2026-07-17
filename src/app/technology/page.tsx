import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./technology.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata: Metadata = {
  title: "Technology & Products",
  description: "Explore SeismoTeck's advanced earthquake prediction technology, IoT sensors, and the SAHAS Alert system.",
};

export default function TechnologyPage() {
  return (
    <div className={styles.page}>
      {/* 1. Page Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <ScrollReveal>
            <h1 className={styles.bannerTitle}>Our Technology</h1>
            <p className={styles.bannerSubtext}>
              Cutting-edge tools for seismic monitoring and earthquake forecasting
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. SAHAS Alert System */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <ScrollReveal direction="right">
              <div className={styles.textContent}>
                <h2 className={styles.heading}>SAHAS Alert — Earthquake Early Warning System</h2>
                <p>
                  The SAHAS Alert system is proprietary software developed by SASVC SeismoTech for medium-range earthquake forecasting.
                </p>
                <p>
                  Utilizing multi-parametric analysis of satellite data, it continuously monitors the Eastern Hemisphere for pre-seismic anomalies. The system is capable of detecting warning signals, such as underground rumbling sounds, within a 10 to 500 km radius.
                </p>
                <ul className={styles.featureList}>
                  <li><strong>Detection Timeline:</strong> 7 days to 2 days before an earthquake, with a final alert approximately 1 minute before.</li>
                  <li><strong>Multi-parametric Analysis:</strong> Tracks Radon, CO₂, Thermal anomalies, TEC-V, MF2, and Water table fluctuations.</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/img15.jpg"
                  alt="SAHAS Alert system poster"
                  fill
                  className={styles.image}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. IoT Sensor Network */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <div className={`${styles.featureGrid} ${styles.reverseMobile}`}>
            <ScrollReveal direction="right">
              <div className={styles.imageGallery}>
                <div className={styles.imageWrapperHalf}>
                  <Image src="/assets/img3.jpeg" alt="IoT sensor field deployment" fill className={styles.image} />
                </div>
                <div className={styles.imageWrapperHalf}>
                  <Image src="/assets/img18.jpg" alt="Team working on IoT devices" fill className={styles.image} />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.textContent}>
                <h2 className={styles.heading}>IoT-Based Geophysical Monitoring Sensors</h2>
                <p>
                  To acquire high-fidelity, real-time pre-seismic data, we deploy an array of solar-powered IoT sensors directly into active fault zones and seismic hotspots.
                </p>
                <p>
                  These robust field stations continuously monitor environmental parameters that indicate tectonic stress. The data is transmitted securely to our central servers for immediate analysis by the SAHAS Alert system.
                </p>
                <ul className={styles.featureList}>
                  <li>Continuous radon emission monitoring</li>
                  <li>Real-time CO₂ level tracking</li>
                  <li>Thermal anomaly detection</li>
                  <li>Groundwater and water table fluctuation sensors</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Monitoring Dashboard */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading 
              title="Multi-Parametric Monitoring Dashboard" 
              subtext="Real-time visualization of seismic data across global fault lines."
            />
          </ScrollReveal>
          
          <div className={styles.dashboardGrid}>
            <ScrollReveal direction="up" delay={100}>
              <div className={styles.dashboardImageWrapper}>
                <Image src="/assets/img5.jpg" alt="Global earthquake monitoring dashboard" fill className={styles.image} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className={styles.dashboardImageWrapper}>
                <Image src="/assets/img6.jpg" alt="Philippine Archipelago seismic zone dashboard" fill className={styles.image} />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <p className={styles.centerText}>
              Our dashboard provides granular visibility into earthquake monitoring data for critical locations including Central Mexico, South Mexico, Western Chile, Argentina, and the Philippine Archipelago. It highlights tracked parameters such as Radon, CO₂, Thermal, TEC-V, MF2, and Water table fluctuations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Seismic Imaging */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <ScrollReveal direction="right">
              <div className={styles.textContent}>
                <h2 className={styles.heading}>Advanced Seismic Imaging & Plate Tectonic Modeling</h2>
                <p>
                  Visualizing the invisible forces beneath the Earth&apos;s crust is critical to our predictive models. Our software generates advanced seismic imaging based on historical earthquake data, active fault lines, and seismic frequency waveforms.
                </p>
                <p>
                  This holistic visualization approach allows our researchers to identify stress accumulation points and predict where the crust is most likely to fracture next.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/img2.jpeg"
                  alt="Earth with tectonic plates and waveform data"
                  fill
                  className={styles.image}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
