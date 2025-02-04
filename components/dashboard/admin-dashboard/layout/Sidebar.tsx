import React, { useState } from 'react';
import {
  Menu,
  X,
  Users,
  BookOpen,
  Book,
  LogOut,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  Home,
} from 'lucide-react';
import { NavLink } from './NavLink';

interface SidebarProps {
  isCollapsed: boolean;
  onCollapse: (value: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onCollapse,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/admin' },
    { icon: Users, label: 'User Management', href: '/dashboard/admin/users' },
    {
      icon: BookOpen,
      label: 'Lessons Management',
      href: '/dashboard/admin/lessons',
    },
    {
      icon: Book,
      label: 'Vocabulary Management',
      href: '/dashboard/admin/vocabulary',
    },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 md:hidden"
        aria-label="Toggle Menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-16">
          <div className="flex-1 overflow-y-auto px-4">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  onClick={() => setMobileOpen(false)}
                  preventDefault={false}
                />
              ))}
            </nav>
          </div>
          <div className="p-4 border-t space-y-3">
            <button
              onClick={handleHomeClick}
              className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Home size={24} />
              <span>Return to Home</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={24} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop sidebar */}
      <aside
        className={`
          hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:bg-white md:border-r md:shadow-lg md:z-30
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'md:w-20' : 'md:w-64'}
        `}
      >
        <button
          onClick={() => onCollapse(!isCollapsed)}
          className="absolute -right-3 top-6 p-1.5 rounded-full bg-white border shadow-md hover:bg-gray-50 transition-colors"
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} collapsed={isCollapsed} />
              ))}
            </nav>
          </div>
          <div className="p-4 border-t space-y-2">
            <button
              onClick={handleHomeClick}
              className={`
                w-full flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors
                ${isCollapsed ? 'justify-center' : 'gap-3'}
              `}
              title={isCollapsed ? 'Return to Home' : undefined}
            >
              <Home size={24} />
              {!isCollapsed && <span>Return to Home</span>}
            </button>
            <button
              onClick={handleLogout}
              className={`
                w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors
                ${isCollapsed ? 'justify-center' : 'gap-3'}
              `}
              title={isCollapsed ? 'Logout' : undefined}
            >
              <LogOut size={24} />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
