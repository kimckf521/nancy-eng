import { UserPlus, Shield, User, MoreVertical } from 'lucide-react';

export default function AdminStaff() {
  const staff = [
    { id: "EMP-102", name: 'Jane Smith', email: 'jane.s@civilcore.com', role: 'Admin', status: 'Active' },
    { id: "EMP-145", name: 'John Engineer', email: 'john.e@civilcore.com', role: 'Employee', status: 'Active' },
    { id: "EMP-188", name: 'Michael Chen', email: 'm.chen@civilcore.com', role: 'Employee', status: 'Active' },
    { id: "EMP-201", name: 'Sarah Connor', email: 's.connor@civilcore.com', role: 'Employee', status: 'Offline' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>STAFF ROLES</h1>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
          <UserPlus size={18} /> Invite Staff
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {staff.map((employee, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {employee.role === 'Admin' ? <Shield size={24} color="var(--primary)" /> : <User size={24} color="rgba(255,255,255,0.6)" />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{employee.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{employee.id}</p>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>
                <MoreVertical size={20} />
              </button>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {employee.email}
              </p>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ 
                padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600,
                background: employee.role === 'Admin' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                color: employee.role === 'Admin' ? 'var(--primary)' : 'rgba(255,255,255,0.7)'
              }}>
                {employee.role}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: employee.status === 'Active' ? '#22c55e' : 'rgba(255,255,255,0.5)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: employee.status === 'Active' ? '#22c55e' : 'rgba(255,255,255,0.3)' }}></span>
                {employee.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
