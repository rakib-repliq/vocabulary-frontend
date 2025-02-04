'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';

const NavbarWrapper = () => {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isDashboard) return null;
  return <Navbar />;
};

export default NavbarWrapper;
