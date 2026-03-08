"use client";

import { Package, Users, MessageSquare, Activity, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: <Activity size={20} /> },
    { href: '/admin/equipment', label: 'Equipment', icon: <Package size={20} /> },
    { href: '/admin/staff', label: 'Staff Roles', icon: <Users size={20} /> },
    { href: '/admin/enquiries', label: 'Enquiries', icon: <MessageSquare size={20} /> },
  ];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <div className="section-container" style={{ display: 'flex', gap: '32px' }}>
        
        {/* Sidebar */}
        <div style={{ width: '250px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', paddingLeft: '16px', color: 'rgba(255,255,255,0.5)' }}>Admin Menu</h2>
          
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: '12px 16px', 
                  background: isActive ? 'rgba(251, 191, 36, 0.1)' : 'transparent', 
                  color: isActive ? 'var(--primary)' : 'rgba(255,255,255,0.7)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  fontWeight: isActive ? 600 : 400, 
                  transition: 'all 0.2s ease'
                }} className="hover:text-primary hover:bg-white/5">
                  {item.icon} {item.label}
                </div>
              </Link>
            );
          })}
          
          <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
            <Link href="/login" style={{ padding: '12px 16px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textDecoration: 'none', fontWeight: 500 }}>
              <LogOut size={20} /> Sign Out
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          {children}
        </div>

      </div>
    </div>
  );
}
