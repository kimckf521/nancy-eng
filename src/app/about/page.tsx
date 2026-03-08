import { Shield, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Active Machinery", value: "500+" },
    { label: "Projects Supported", value: "1,200+" },
    { label: "Expert Technicians", value: "150+" },
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section className="section-container" style={{ paddingBottom: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ padding: '8px 16px', background: 'rgba(251, 191, 36, 0.1)', color: 'var(--primary)', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '24px' }}>
            ABOUT CIVILCORE
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: 1.1 }}>
            BUILDING THE FUTURE <br />WITH <span style={{ color: 'var(--primary)' }}>PRECISION</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '800px', fontSize: '1.1rem', marginBottom: '60px' }}>
            CivilCore has been at the forefront of the civil engineering equipment industry for over two decades. 
            We provide the backbone for modern infrastructure, supplying construction companies with the most reliable, 
            high-performance machinery in the world.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-card" style={{ padding: '32px', textAlign: 'center', borderTop: '3px solid var(--primary)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="high-tech-gradient" style={{ padding: '80px 0' }}>
        <div className="section-container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>OUR <span style={{ color: 'var(--primary)' }}>CORE VALUES</span></h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Shield size={32} />, title: "Uncompromising Safety", desc: "Safety is engineered into everything we do. Our fleet undergoes rigorous multi-point inspections." },
              { icon: <Zap size={32} />, title: "Relentless Innovation", desc: "We continually upgrade our equipment line with the latest automated and eco-friendly technologies." },
              { icon: <Target size={32} />, title: "Absolute Precision", desc: "In engineering, margins matter. We provide the tools that guarantee accuracy within millimeters." },
              { icon: <Users size={32} />, title: "Dedicated Partnership", desc: "We don't just supply machinery; we embed ourselves as dedicated partners in your project's success." }
            ].map((val, i) => (
              <div key={i} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{val.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
