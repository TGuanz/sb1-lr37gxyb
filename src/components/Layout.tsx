import React from 'react';
import { Header } from './Header';
import { SidePanel } from './SidePanel';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1A1C1E]">
      <SidePanel />
      <div className="pl-64">
        <Header />
        <main className="max-w-[1920px] mx-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};