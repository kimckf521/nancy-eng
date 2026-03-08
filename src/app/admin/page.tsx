import { Package, Users, MessageSquare } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>DASHBOARD <span style={{ color: 'var(--primary)', fontSize: '1.2rem', verticalAlign: 'middle', marginLeft: '12px', opacity: 0.8 }}>(Demo Mode)</span></h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="glass-card" style={{ padding: '24px', borderTop: '3px solid var(--primary)' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>Total Equipment</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--foreground)', fontFamily: 'var(--font-heading)' }}>124</div>
        </div>
        <div className="glass-card" style={{ padding: '24px', borderTop: '3px solid var(--primary)' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>New Enquiries</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--foreground)', fontFamily: 'var(--font-heading)' }}>12</div>
        </div>
        <div className="glass-card" style={{ padding: '24px', borderTop: '3px solid var(--primary)' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>Active Staff</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--foreground)', fontFamily: 'var(--font-heading)' }}>8</div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Recent Activity</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Package size={20} color="var(--primary)" />
              <span style={{ fontWeight: 500 }}>CAT-336 Excavator added to inventory.</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>2 hours ago</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MessageSquare size={20} color="var(--primary)" />
              <span style={{ fontWeight: 500 }}>New inquiry received for Komatsu D61PX Dozer.</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>5 hours ago</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Users size={20} color="var(--primary)" />
              <span style={{ fontWeight: 500 }}>New employee account &quot;John Engineer&quot; created.</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>1 day ago</span>
          </div>
        </div>
      </div>
    </>
  );
}
