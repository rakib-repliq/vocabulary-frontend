'use client';
import { usePathname } from 'next/navigation';
import { FooterLink, FooterNewsletter, FooterSocial } from './footer-utils';

const Footer = () => {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isDashboard) return null;
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">日本語学習</h2>
            <p className="text-gray-400">
              Your gateway to mastering Japanese language through interactive
              lessons and comprehensive vocabulary building.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLink
            title="Quick Links"
            links={[
              { label: 'Lessons', href: '#' },
              { label: 'Tutorials', href: '#' },
              { label: 'Practice', href: '#' },
              { label: 'Support', href: '#' },
            ]}
          />

          {/* Resources */}
          <FooterLink
            title="Resources"
            links={[
              { label: 'Study Guide', href: '#' },
              { label: 'FAQs', href: '#' },
              { label: 'Community', href: '#' },
              { label: 'Blog', href: '#' },
            ]}
          />

          {/* Newsletter Section */}
          <FooterNewsletter />
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <FooterSocial />
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Voca Sensei. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
