'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  collapsed?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon: Icon,
  label,
  onClick,
  collapsed = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      title={collapsed ? label : undefined}
      className={`
        flex items-center p-3 rounded-lg transition-colors
        ${collapsed ? 'justify-center' : 'gap-3'}
        ${
          isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      <Icon size={24} />
      {!collapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};
