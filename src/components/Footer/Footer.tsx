import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, COMPANY_INFO } from "../../utils/constants";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            {/* Flex container to put logo and text side-by-side */}
            <div className={styles.brandContainer}>
              <Image 
                src="/logo.png" 
                alt={`${COMPANY_INFO.brand} Logo`}
                width={40}  /* Reduced size to a clean icon size */
                height={40} /* Reduced size to a clean icon size */
                className={styles.logo}
                priority
              />
              <h3 className={styles.brand}>{COMPANY_INFO.brand}</h3>
            </div>
            
            <p className={styles.description}>
              {COMPANY_INFO.name}<br />
              Pioneering earthquake forecast through advanced multi-parametric monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.contactInfo}>
              <li>{COMPANY_INFO.location}</li>
              <li>
                {COMPANY_INFO.emails.map((email, idx) => (
                  <span key={idx} style={{ display: "block" }}>{email}</span>
                ))}
              </li>
              <li>{COMPANY_INFO.phone}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>
            <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className={styles.disclaimer}>
              The forecasts and claims presented on this website are based on the independent research of SeismoTeck and are not verified by official government seismology departments unless explicitly stated.
            </p>
          </div>
          <div className={styles.themeToggleWrapper}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}