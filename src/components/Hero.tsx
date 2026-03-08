import styles from './Hero.module.css';
import { ArrowRight, Drill, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Zap size={14} className={styles.zap} />
          <span>Next-Generation Civil Solutions</span>
        </div>
        <h1 className={styles.title}>
          PREMIUM <span className={styles.accent}>ENGINEERING</span><br />
          EQUIPMENT SOLUTIONS
        </h1>
        <p className={styles.description}>
          High-performance machinery for the modern construction landscape. 
          Reliable, powerful, and precision-engineered for maximum efficiency.
        </p>
        <div className={styles.ctaGroup}>
          <button className={styles.primaryBtn}>
            Explore Inventory
            <ArrowRight size={20} />
          </button>
          <button className={styles.secondaryBtn}>
            Request Quote
          </button>
        </div>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <ShieldCheck className={styles.featureIcon} />
            <span>Certified Quality</span>
          </div>
          <div className={styles.feature}>
            <Drill className={styles.featureIcon} />
            <span>Modern Fleet</span>
          </div>
          <div className={styles.feature}>
            <Zap className={styles.featureIcon} />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
