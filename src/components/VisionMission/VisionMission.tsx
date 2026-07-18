"use client";

import React from "react";
import styles from "./VisionMission.module.css";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";

export default function VisionMission() {
  return (
    <div className={styles.container}>
      {/* VISION SECTION */}
      <div>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Corporate Vision Matrix</h2>
        </ScrollReveal>
        
        <div className={styles.visionGrid}>
          {/* Card 1 */}
          <ScrollReveal direction="up" delay={100}>
            <div className={styles.featureCard}>
              <span className={styles.cardNum}>01</span>
              <h3>Mitigational Global Networks</h3>
              <p>To spread advanced mitigational devices, localized IoT model software systems, and strategic support services globally.</p>
              <div 
                className={styles.imageWindow} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80')" }}
              >
                <span className={styles.windowCaption}>Live Data Feed Overlays</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal direction="up" delay={200}>
            <div className={styles.featureCard}>
              <span className={styles.cardNum}>02</span>
              <h3>Geophysical Prospecting SaaS</h3>
              <p>Pioneering Geophysical & Geochemical exploration frameworks backed by premium AI/ML predictive analytics engines.</p>
              <div 
                className={styles.imageWindow} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=500&q=80')" }}
              >
                <span className={styles.windowCaption}>Subsurface AI Modeling</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal direction="up" delay={300}>
            <div className={styles.featureCard}>
              <span className={styles.cardNum}>03</span>
              <h3>Community IoT Innovation</h3>
              <p>Implying custom, top-tier technical tools to deploy high-utility civic IoT ecosystems solving societal problems directly.</p>
              <div 
                className={styles.imageWindow} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=500&q=80')" }}
              >
                <span className={styles.windowCaption}>Smart Infrastructure Hub</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4 */}
          <ScrollReveal direction="up" delay={100}>
            <div className={styles.featureCard}>
              <span className={styles.cardNum}>04</span>
              <h3>Renewable Energy Trajectories</h3>
              <p>Harnessing revolutionary clean-energy strategies backed by seismic-tier structural security diagnostics.</p>
              <div 
                className={styles.imageWindow} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=80')" }}
              >
                <span className={styles.windowCaption}>Sustainable Infrastructures</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5 */}
          <ScrollReveal direction="up" delay={200}>
            <div className={styles.featureCard}>
              <span className={styles.cardNum}>05</span>
              <h3>Robotics & Automation Ecosystems</h3>
              <p>Expanding advanced tool systems heavily into modern Robotics and high-fidelity Electronic Manufacturing sectors.</p>
              <div 
                className={styles.imageWindow} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80')" }}
              >
                <span className={styles.windowCaption}>Autonomous Engineering</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6 */}
          <ScrollReveal direction="up" delay={300}>
            <div className={styles.featureCard}>
              <span className={styles.cardNum}>06</span>
              <h3>Sovereign Technology Architecture</h3>
              <p>Creating vitalized labor opportunities and transforming states into premier operational hubs for core digital innovations.</p>
              <div 
                className={styles.imageWindow} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80')" }}
              >
                <span className={styles.windowCaption}>Innovation Lab Environment</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Strategic Mission Directives</h2>
        </ScrollReveal>
        
        <div className={styles.missionRow}>
          <ScrollReveal direction="right" delay={100}>
            <div className={styles.missionPill}>
              <h4>Autonomous Sovereignty</h4>
              <p>Establishing absolute regional self-dependence inside fields of AI/ML computation frameworks, advanced Robotics, and structural hardware engineering.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className={styles.missionPill}>
              <h4>Novel Commercialization</h4>
              <p>Capitalizing entirely on breakthrough inventions and unique proprietary patents inside target geological domains.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={300}>
            <div className={styles.missionPill}>
              <h4>Global Leapfrog Vector</h4>
              <p>Elevating regional innovation frameworks aggressively into tier-one competitive rankings worldwide.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* INTERACTIVE FOOTER CTA */}
      <ScrollReveal direction="up" delay={400}>
        <div className={styles.ctaWrapper}>
          <Link href="/technology">
            <button className={styles.btnPremium}>Explore Portal</button>
          </Link>
          <Link href="/contact">
            <button className={styles.btnOutline}>Partner With Us</button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
