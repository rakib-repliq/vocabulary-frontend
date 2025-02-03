import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
  sidebarCollapsed?: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({
  children,
  sidebarCollapsed = false,
}) => {
  const marginClass = sidebarCollapsed ? 'md:ml-20' : 'md:ml-64';

  return (
    <main
      className={`
        flex-1
        ml-0
        ${marginClass}
        min-h-screen
        bg-gray-50
        transition-all
        duration-300
        ease-in-out
        overflow-auto
      `}
    >
      <div className="p-4 md:p-6">
        <div className="max-w-[1600px] mx-auto">{children}</div>
      </div>
    </main>
  );
};
