import { Drill, Search } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="section-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>OUR <span style={{ color: 'var(--primary)' }}>EQUIPMENT</span></h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px' }}>
              Browse our inventory of high-performance civil engineering machinery. 
              All equipment is rigorously maintained and certified for immediate deployment.
            </p>
          </div>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={20} />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '12px 16px 12px 40px',
                borderRadius: '8px',
                color: '#fff',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {[
            { name: 'CAT-336 Excavator', cat: 'Earthmoving', price: '$850/day' },
            { name: 'Komatsu D61PX Dozer', cat: 'Earthmoving', price: '$920/day' },
            { name: 'Volvo L120H Loader', cat: 'Material Handling', price: '$780/day' },
            { name: 'Liebherr LTM Mobile Crane', cat: 'Lifting', price: '$1,500/day' },
            { name: 'Trimble S9 Total Station', cat: 'Surveying', price: '$220/day' },
            { name: 'Bomag BW 213 Roller', cat: 'Compaction', price: '$450/day' },
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Drill size={48} style={{ color: 'rgba(255,255,255,0.2)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{item.name}</h3>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{item.price}</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '24px' }}>{item.cat}</p>
              
              <div style={{ marginTop: 'auto', display: 'flex', gap: '12px' }}>
                <button className="btn-primary" style={{ flex: 1, padding: '10px' }}>Request</button>
                <button style={{ 
                  flex: 1, 
                  background: 'transparent', 
                  color: '#fff', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  borderRadius: '8px', 
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
