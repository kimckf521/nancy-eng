import Link from 'next/link';
import styles from './Navbar.module.css';
import { HardHat, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <HardHat size={32} className={styles.logoIcon} />
          <span>CIVIL<span className={styles.logoAccent}>CORE</span></span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/products" className={styles.link}>Equipment</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Support</Link>
        </div>
        
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>
            <LogIn size={20} />
            <span>Login</span>
          </Link>
          <Link href="/admin" className={styles.adminLink}>
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
