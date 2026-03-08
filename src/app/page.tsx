import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Product categories and featured equipment will go here */}
      <section className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>ENGINEERED FOR <span style={{ color: 'var(--primary)' }}>PRECISION</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>
            We provide the most advanced heavy machinery and surveying equipment to ensure your projects are completed with absolute accuracy and speed.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          marginTop: '60px' 
        }}>
          {/* Placeholders for upcoming equipment grid */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card" style={{ padding: '32px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ marginBottom: 'auto', background: 'rgba(251, 191, 36, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '30px', height: '30px', border: '2px solid var(--primary)', borderRadius: '4px' }}></div>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Heavy Machinery {i}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
                Premium performance with the latest in safety and efficiency standards.
              </p>
              <button className="btn-primary" style={{ width: 'fit-content' }}>View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
