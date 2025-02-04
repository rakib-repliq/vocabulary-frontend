'use client';

import { useState } from 'react';
import {
  MainContent,
  Sidebar,
} from '@/components/dashboard/admin-dashboard/layout';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
      />
      <MainContent sidebarCollapsed={sidebarCollapsed}>{children}</MainContent>
    </div>
  );
}
