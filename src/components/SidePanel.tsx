import React, { useState, useCallback } from 'react';
import { navigationItems } from '../data/navigationItems';
import { NavItem } from './NavItem';

export const SidePanel: React.FC = () => {
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string>('Overview');

  const handleToggle = useCallback((path: string[]) => {
    const pathString = path.join('/');
    setExpandedPaths((prev) => {
      if (prev.includes(pathString)) {
        return prev.filter((p) => !p.startsWith(pathString));
      }
      return [...prev, pathString];
    });
  }, []);

  const handleSelect = useCallback((path: string[]) => {
    setActiveItem(path[0]);
  }, []);

  return (
    <div className="w-64 bg-[#1E2023] h-screen fixed left-0 top-0 border-r border-[#2A2D32] overflow-y-auto">
      <div className="flex items-center justify-center h-16 border-b border-[#2A2D32]">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
      </div>
      <nav className="py-4 space-y-1">
        {navigationItems.map((item) => (
          <NavItem
            key={item.label}
            item={{
              ...item,
              active: item.label === activeItem
            }}
            expanded={expandedPaths.includes(item.label)}
            expandedPaths={expandedPaths}
            onToggle={handleToggle}
            onSelect={handleSelect}
          />
        ))}
      </nav>
    </div>
  );
};