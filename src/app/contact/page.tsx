import EnquiryForm from '@/components/EnquiryForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="section-container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>GET IN <span style={{ color: 'var(--primary)' }}>TOUCH</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
            Our engineering support team is available 24/7 to assist with equipment inquiries, 
            technical support, and emergency dispatch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'start' }}>
          
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><MapPin size={28} /></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Global Headquarters</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                    100 Innovation Drive<br />
                    Industrial Tech Park<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Phone size={28} /></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>24/7 Support Line</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>+1 (800) CIVIL-PRO</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>+1 (555) 123-4567</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Mail size={28} /></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Direct Email</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>support@civilcore.com</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>sales@civilcore.com</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', marginTop: '16px', background: 'rgba(251, 191, 36, 0.05)', borderColor: 'rgba(251, 191, 36, 0.2)' }}>
                <div style={{ color: 'var(--primary)' }}><Clock size={32} /></div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Emergency Dispatch Available</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>We guarantee a 4-hour response time for critical equipment failures on-site.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EnquiryForm />
          </div>

        </div>

      </div>
    </div>
  );
}
