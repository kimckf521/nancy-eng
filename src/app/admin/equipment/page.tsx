import { Plus, Search, Edit2, Trash2, Filter } from 'lucide-react';

export default function AdminEquipment() {
  const inventory = [
    { id: "EQ-001", name: 'CAT-336 Excavator', cat: 'Earthmoving', stock: 4, status: 'Active' },
    { id: "EQ-002", name: 'Komatsu D61PX Dozer', cat: 'Earthmoving', stock: 2, status: 'Active' },
    { id: "EQ-003", name: 'Volvo L120H Loader', cat: 'Material Handling', stock: 5, status: 'Maintenance' },
    { id: "EQ-004", name: 'Liebherr LTM Crane', cat: 'Lifting', stock: 1, status: 'Active' },
    { id: "EQ-005", name: 'Trimble S9 Tracker', cat: 'Surveying', stock: 12, status: 'Active' },
  ];

  return (
    <div className="admin-page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>EQUIPMENT MENU</h1>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
          <Plus size={18} /> Add Equipment
        </button>
      </div>

      <div className="glass-card" style={{ padding: '24px', marginBottom: '32px', display: 'flex', gap: '16px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={20} />
          <input 
            type="text" 
            placeholder="Search inventory ID or name..." 
            style={{
              width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 16px 12px 40px', borderRadius: '8px', color: '#fff', fontFamily: 'inherit'
            }}
          />
        </div>
        <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <tr>
              <th style={{ padding: '16px 24px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.85rem' }}>ID</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.85rem' }}>Equipment Item</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.85rem' }}>Category</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.85rem' }}>Stock</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.85rem' }}>Status</th>
              <th style={{ padding: '16px 24px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px 24px', color: 'rgba(255,255,255,0.5)' }}>{item.id}</td>
                <td style={{ padding: '16px 24px', fontWeight: 500 }}>{item.name}</td>
                <td style={{ padding: '16px 24px', color: 'rgba(255,255,255,0.7)' }}>{item.cat}</td>
                <td style={{ padding: '16px 24px' }}>{item.stock}</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{ 
                    padding: '4px 10px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600,
                    background: item.status === 'Active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    color: item.status === 'Active' ? '#22c55e' : '#f59e0b',
                    border: `1px solid ${item.status === 'Active' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`
                  }}>{item.status}</span>
                </td>
                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', marginRight: '16px' }} aria-label="Edit"><Edit2 size={18} /></button>
                  <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }} aria-label="Delete"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
