import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./team.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import TeamCard from "@/components/TeamCard/TeamCard";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the researchers, engineers, and leaders behind SeismoTeck.",
};

export default function TeamPage() {
  return (
    <div className={styles.page}>
      {/* 1. Page Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <ScrollReveal>
            <h1 className={styles.bannerTitle}>Meet the Team</h1>
            <p className={styles.bannerSubtext}>
              The minds behind the next generation of earthquake forecast technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Core Leadership */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading title="Core Leadership" />
          </ScrollReveal>

          <div className={styles.teamGrid2}>
            <ScrollReveal direction="up" delay={100}>
              <TeamCard
                imagePath="/assets/img10.jpg"
                name="Umesh Prasad Verma"
                title="Founder & Lead Researcher"
                altText="Umesh Prasad Verma"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <TeamCard
                imagePath="/assets/img21.jpg"
                name="Mrs. Sweety Verma"
                title="Co-Founder & Director"
                altText="Mrs. Sweety Verma"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Advisory Board & Consultants */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading title="Advisors & Consultants" />
          </ScrollReveal>

          <div className={styles.teamGrid3}>
            <ScrollReveal direction="up" delay={100}>
              <TeamCard
                imagePath="/assets/img19.jpg"
                name="Dr. Sankar Dayal"
                title="Scientific Advisor"
                altText="Dr. Sankar Dayal"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <TeamCard
                imagePath="/assets/img20.jpg"
                name="Dr. Prakash Chandra"
                title="Research Consultant"
                altText="Dr. Prakash Chandra"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <TeamCard
                imagePath="/assets/img22.jpg"
                name="Kanhaiya Saran"
                title="Marketing Manager"
                altText="Kanhaiya Saran"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Operations & Field Research Team */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <SectionHeading 
              title="Operations & Field Research" 
              subtext="Our dedicated team working on the ground to deploy IoT sensors and analyze data."
            />
          </ScrollReveal>

          <div className={styles.photoGrid}>
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.photoWrapper}>
                <Image
                  src="/assets/img14.jpg"
                  alt="Founder with the core field team"
                  fill
                  className={styles.image}
                />
                <div className={styles.caption}>Core Field Operations Team</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.photoWrapper}>
                <Image
                  src="/assets/img18.jpg"
                  alt="Founder with interns and researchers working on IoT devices"
                  fill
                  className={styles.image}
                />
                <div className={styles.caption}>IoT Research & Development Interns</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
