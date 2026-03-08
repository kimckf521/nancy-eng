"use client";

import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
import { Mail, Phone } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    router.push('/admin');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>ADMIN <span style={{ color: 'var(--primary)' }}>PORTAL</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Sign in to manage inventory and staff.</p>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.authBtn} onClick={() => handleLogin()}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={24} height={24} />
            Continue with Google
          </button>
          <div className={styles.divider}><span>OR</span></div>
          <button className={styles.authBtn} onClick={() => handleLogin()}>
            <Mail size={20} style={{ color: 'var(--primary)' }} />
            Continue with Email
          </button>
          <button className={styles.authBtn} onClick={() => handleLogin()}>
            <Phone size={20} style={{ color: 'var(--primary)' }} />
            Continue with Phone
          </button>
        </div>
      </div>
    </div>
  );
}
