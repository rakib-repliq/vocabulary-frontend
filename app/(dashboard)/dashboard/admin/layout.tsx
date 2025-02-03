'use client';

import { Sidebar } from '@/components/dashboard/admin-dashboard/layout/Sidebar';
import { MainContent } from '@/components/dashboard/admin-dashboard/layout/MainContent';
import { useState } from 'react';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
      />
      <MainContent sidebarCollapsed={sidebarCollapsed}>{children}</MainContent>
    </div>
  );
}
