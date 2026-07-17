"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3>Thank you for reaching out</h3>
        <p>Your message has been received. Our team will get back to you shortly.</p>
        <button className={styles.btn} onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input type="text" id="subject" required className={styles.input} placeholder="Research Collaboration" />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" required className={styles.textarea} placeholder="How can we help you?" rows={5}></textarea>
      </div>
      <button 
        type="submit" 
        className={styles.submitBtn}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
