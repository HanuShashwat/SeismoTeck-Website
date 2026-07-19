"use client";

import React, { useState } from "react";
import styles from "./ProductMatrix.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

export default function ProductMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quotation request submitted to Enterprise Pipeline Processing.");
  };

  return (
    <section className={styles.section}>
      <div className={styles.containerWrapper}>
        <div className={styles.portalCard}>
          <SectionHeading title="Global Seismic Solution" />

          <div className={styles.portalBody}>
            {/* Task Menu */}
            <nav className={styles.taskMenu}>
              {[
                "1. IoT Connectivity Hub",
                "2. Satellite Region Status",
                "3. Device Structural Layout",
                "4. Device Functionality",
                "5. Deployment Whitepaper",
                "6. Request Portal Quote",
              ].map((text, idx) => (
                <button
                  key={idx}
                  className={`${styles.menuBtn} ${activeTab === idx ? styles.activeBtn : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {text}
                </button>
              ))}
            </nav>

            {/* Content Stage */}
            <main className={styles.contentStage}>
              {activeTab === 0 && (
                <section className={styles.contentPanel}>
                  <h3 className={styles.panelTitle}>IoT Incorporated Connectivity</h3>
                  <p className={styles.panelDesc}>
                    Real-time telemetry pipeline connecting edge instrumentation micro-arrays to cloud database structures seamlessly via continuous secure telemetry protocols.
                  </p>
                  <div className={styles.iotGrid}>
                    <div className={styles.iotCard}>
                      <h4>Sensor Node Alpha</h4>
                      <div className={styles.statusWrapper}>
                        <span className={styles.statusDot}></span>Active
                      </div>
                      <small>Data rate: 45 kbps</small>
                    </div>
                    <div className={styles.iotCard}>
                      <h4>Sensor Node Beta</h4>
                      <div className={styles.statusWrapper}>
                        <span className={styles.statusDot}></span>Active
                      </div>
                      <small>Data rate: 48 kbps</small>
                    </div>
                    <div className={styles.iotCard}>
                      <h4>Gateway Controller</h4>
                      <div className={styles.statusWrapper}>
                        <span className={styles.statusDot}></span>Active
                      </div>
                      <small>Uptime: 99.98%</small>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 1 && (
                <section className={styles.contentPanel}>
                  <h3 className={styles.panelTitle}>Satellite Connected Regional Status</h3>
                  <p className={styles.panelDesc}>
                    Global network link mapping coordinates across multiple geographic parameters to coordinate telemetry warning accuracy.
                  </p>
                  
                  {/* Added responsive wrapper for mobile table scrolling */}
                  <div className={styles.tableResponsive}>
                    <table className={styles.satelliteTable}>
                      <thead>
                        <tr>
                          <th>Region Vector</th>
                          <th>Link Status</th>
                          <th>Latency Delta</th>
                          <th>Data Stream</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Asia-Pacific Hub</td>
                          <td><span className={styles.statusDot}></span>Operational</td>
                          <td>12ms</td>
                          <td>Telemetry Nominal</td>
                        </tr>
                        <tr>
                          <td>Euro-African Corridor</td>
                          <td><span className={styles.statusDot}></span>Operational</td>
                          <td>18ms</td>
                          <td>Telemetry Nominal</td>
                        </tr>
                        <tr>
                          <td>Pan-American Network</td>
                          <td><span className={styles.statusDot}></span>Operational</td>
                          <td>14ms</td>
                          <td>Telemetry Nominal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {activeTab === 2 && (
                <section className={styles.contentPanel}>
                  <h3 className={styles.panelTitle}>Device Structural Schematic Layout</h3>
                  <p className={styles.panelDesc}>
                    Geometric engineering alignment matrix displaying structural components, multi-parametric hardware housing, and localized transceiver modules.
                  </p>
                  <div className={styles.blueprintContainer}>
                    <div className={styles.wireframeBox}></div>
                    <div className={styles.blueprintLabel}>3D ISOMETRIC SCHEMATIC ACTIVATED</div>
                  </div>
                </section>
              )}

              {activeTab === 3 && (
                <section className={styles.contentPanel}>
                  <h3 className={styles.panelTitle}>Device Core Functional Mechanics</h3>
                  <p className={styles.panelDesc}>
                    The hardware unit operations process parameters concurrently to isolate geological risk levels before propagation event waves hit localized targets.
                  </p>
                  <ul className={styles.mechanicsList}>
                    <li>
                      <strong>High-Fidelity Edge Computation:</strong> Filters environmental noise signatures instantly on-site.
                    </li>
                    <li>
                      <strong>Multi-Channel Signal Processing:</strong> Matches input vectors against historical matrices simultaneously.
                    </li>
                    <li>
                      <strong>Autonomous Failure Recovery:</strong> Instant satellite routing switches take over if terrestrial networks fail.
                    </li>
                  </ul>
                </section>
              )}

              {activeTab === 4 && (
                <section className={styles.contentPanel}>
                  <h3 className={styles.panelTitle}>Technical Deployment & Integration Whitepaper</h3>
                  <p className={styles.panelDesc}>
                    Architectural documentation details, installation manuals, and operational guidelines for deploying high-yield telemetry infrastructure arrays.
                  </p>
                  <div className={styles.timeline}>
                    <div className={styles.timelineStep}>
                      <div className={styles.stepNum}>1</div>
                      <div>
                        <h5 className={styles.stepTitle}>Site Calibration & Survey</h5>
                        <p className={styles.stepDesc}>Geographic validation of localized ground vectors using high-definition satellite positioning datasets.</p>
                      </div>
                    </div>
                    <div className={styles.timelineStep}>
                      <div className={styles.stepNum}>2</div>
                      <div>
                        <h5 className={styles.stepTitle}>Physical Installation Framework</h5>
                        <p className={styles.stepDesc}>Securing concrete foundation modules and anchoring structural equipment chassis casings safely.</p>
                      </div>
                    </div>
                    <div className={styles.timelineStep}>
                      <div className={styles.stepNum}>3</div>
                      <div>
                        <h5 className={styles.stepTitle}>IoT Provisioning & Validation</h5>
                        <p className={styles.stepDesc}>Activating the identity credentials inside the gateway interface to synchronize global server parameters.</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 5 && (
                <section className={styles.contentPanel}>
                  <h3 className={styles.panelTitle}>Connect & Request Enterprise Quotation</h3>
                  <p className={styles.panelDesc}>
                    Submit implementation details to acquire regional pricing estimates and custom device configurations tailored for your specific operations.
                  </p>
                  <form className={styles.quoteForm} onSubmit={handleFormSubmit}>
                    <div className={styles.inputGroup}>
                      <input type="text" placeholder="Full Professional Name" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <input type="email" placeholder="Corporate Contact Email" required />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                      <select required defaultValue="">
                        <option value="" disabled>Select Primary Deployment Matrix</option>
                        <option value="regional">Regional Land-Base Array</option>
                        <option value="global">Global Multi-Satellite Network</option>
                        <option value="custom">Custom Hybrid Infrastructure Solutions</option>
                      </select>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                      <textarea rows={4} placeholder="Briefly specify deployment zone metrics or special engineering requests..."></textarea>
                    </div>
                    <button type="submit" className={`${styles.submitBtn} ${styles.fullWidth}`}>
                      Generate Enterprise Quote
                    </button>
                  </form>
                </section>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}