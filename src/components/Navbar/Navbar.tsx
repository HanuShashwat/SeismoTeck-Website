import Link from "next/link";
import { NAV_LINKS, COMPANY_INFO } from "../../utils/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brand}>{COMPANY_INFO.brand}</span>
          </Link>
        </div>
        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu toggle could be added here later */}
      </div>
    </nav>
  );
}
