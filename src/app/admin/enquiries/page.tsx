import { Search, Filter, Mail, Phone, Calendar, User } from 'lucide-react';

export default function AdminEnquiries() {
  const enquiries = [
    { id: "ENQ-1045", product: "Komatsu D61PX Dozer", customer: "David Miller", email: "david.m@construct.com", status: "New", date: "Oct 24, 2024" },
    { id: "ENQ-1044", product: "General Services", customer: "Sarah Jenkins", email: "s.jenkins@buildit.org", status: "Pending", date: "Oct 23, 2024" },
    { id: "ENQ-1043", product: "Liebherr LTM Crane", customer: "Alex Mercer", email: "amercer@heavycorp.io", status: "Resolved", date: "Oct 20, 2024" },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>CUSTOMER ENQUIRIES</h1>
      </div>

      <div className="glass-card" style={{ padding: '24px', marginBottom: '32px', display: 'flex', gap: '16px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={20} />
          <input 
            type="text" 
            placeholder="Search by customer name or ID..." 
            style={{
              width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 16px 12px 40px', borderRadius: '8px', color: '#fff', fontFamily: 'inherit'
            }}
          />
        </div>
        <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Filter size={18} /> Add Filter
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {enquiries.map((enq, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', borderLeft: enq.status === 'New' ? '4px solid var(--primary)' : '4px solid transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>Inquiry for {enq.product}</h3>
                  <span style={{ 
                    padding: '4px 10px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
                    background: enq.status === 'New' ? 'rgba(251, 191, 36, 0.1)' : enq.status === 'Pending' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                    color: enq.status === 'New' ? 'var(--primary)' : enq.status === 'Pending' ? '#3b82f6' : '#22c55e',
                    border: `1px solid ${enq.status === 'New' ? 'rgba(251, 191, 36, 0.2)' : enq.status === 'Pending' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(34, 197, 94, 0.2)'}`
                  }}>{enq.status}</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>ID: {enq.id}</p>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                <Calendar size={16} /> {enq.date}
              </span>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.5 }}>
                &quot;Hello, I am interested in renting this equipment for a 6-month period starting next week. Can you provide a detailed quote including transportation to site block 4?&quot;
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  <User size={16} color="var(--primary)" /> {enq.customer}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  <Mail size={16} color="var(--primary)" /> {enq.email}
                </div>
              </div>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Reply</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
