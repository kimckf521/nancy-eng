"use client";

import { useState } from 'react';
import styles from './EnquiryForm.module.css';
import { Send, CheckCircle } from 'lucide-react';

interface Props {
  productId?: string;
  productName?: string;
}

const EnquiryForm = ({ productId, productName }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mocking Firebase submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        <CheckCircle size={48} className={styles.successIcon} />
        <h3>Inquiry Sent Successfully</h3>
        <p>Our team will get back to you within 24 hours.</p>
        <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>
        {productName ? `Inquire about ${productName}` : 'General Inquiry'}
      </h3>
      
      <div className={styles.inputGroup}>
        <label>Full Name</label>
        <input type="text" required placeholder="John Doe" />
      </div>
      
      <div className={styles.inputGroup}>
        <label>Email Address</label>
        <input type="email" required placeholder="john@example.com" />
      </div>
      
      <div className={styles.inputGroup}>
        <label>Phone (Optional)</label>
        <input type="tel" placeholder="+1 (555) 000-0000" />
      </div>
      
      <div className={styles.inputGroup}>
        <label>Message</label>
        <textarea rows={4} required placeholder="Tell us about your project requirements..." />
      </div>
      
      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Sending...' : 'Send Inquiry'}
        <Send size={18} />
      </button>
    </form>
  );
};

export default EnquiryForm;
