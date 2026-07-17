import React from "react";
import { Metadata } from "next";
import styles from "./contact.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ContactForm from "@/components/ContactForm/ContactForm";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { COMPANY_INFO } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SeismoTeck for research collaboration, media inquiries, or IoT sensor deployment.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* 1. Page Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <ScrollReveal>
            <h1 className={styles.bannerTitle}>Contact Us</h1>
            <p className={styles.bannerSubtext}>
              Partner with us in the pursuit of earthquake prediction and disaster preparedness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Contact Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            
            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className={styles.contactInfo}>
                <SectionHeading title="Get in Touch" alignment="left" />
                
                <p className={styles.introText}>
                  Whether you represent a government disaster management agency, a scientific research institution, or a media outlet, we welcome collaboration and inquiries.
                </p>

                <div className={styles.infoCards}>
                  <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>📍</div>
                    <div>
                      <h4 className={styles.infoTitle}>Headquarters</h4>
                      <p className={styles.infoText}>{COMPANY_INFO.location}</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>✉️</div>
                    <div>
                      <h4 className={styles.infoTitle}>Email</h4>
                      <p className={styles.infoText}>
                        <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                      </p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>📞</div>
                    <div>
                      <h4 className={styles.infoTitle}>Phone</h4>
                      <p className={styles.infoText}>
                        <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.businessHours}>
                  <h4 className={styles.infoTitle}>Business Hours</h4>
                  <p className={styles.infoText}>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
                  <p className={styles.infoText}>Emergency Operations: 24/7 Monitoring</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left" delay={200}>
              <div className={styles.formWrapper}>
                <ContactForm />
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
    </div>
  );
}
