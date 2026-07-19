"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, COMPANY_INFO } from "../../utils/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <Image 
              src="/logo.png" 
              alt="SeismoTeck Logo" 
              width={40} 
              height={40} 
              className={styles.logoImage} 
            />
            <span className={styles.brand}>{COMPANY_INFO.brand}</span>
          </Link>
        </div>
        
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className={styles.link}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button 
          className={`${styles.mobileToggle} ${isOpen ? styles.active : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}
