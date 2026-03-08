import { Wrench, Truck, BookOpen, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench size={32} />,
      title: "Equipment Maintenance",
      desc: "Our certified technicians provide 24/7 on-site repair and preventative maintenance to ensure zero downtime for your critical machinery."
    },
    {
      icon: <Truck size={32} />,
      title: "Heavy Haulage & Logistics",
      desc: "End-to-end transportation solutions for oversized loads. We deliver your equipment directly to the site, on time and fully insured."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Operator Training",
      desc: "Comprehensive certification programs for heavy machinery operation, focusing on safety protocols and maximum operational efficiency."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Site Safety Audits",
      desc: "Expert evaluation of your construction site to ensure compliance with the latest OH&S regulations regarding equipment operation."
    }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="section-container">
        <h1 style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>FIELD <span style={{ color: 'var(--primary)' }}>SERVICES</span></h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto 60px', textAlign: 'center' }}>
          Beyond equipment sales and rentals, CivilCore provides comprehensive support services 
          to keep your projects running seamlessly from groundbreaking to completion.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
          {services.map((service, i) => (
            <div key={i} className="glass-card" style={{ padding: '40px', display: 'flex', gap: '24px' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                {service.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {service.desc}
                </p>
                <button style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--primary)',
                  paddingBottom: '4px'
                }}>Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
