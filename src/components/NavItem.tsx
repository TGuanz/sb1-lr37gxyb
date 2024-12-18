import React from 'react';
import * as Icons from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavItem as NavItemType } from '../types/navigation';
import { NavSubItem } from './NavSubItem';
import { cn } from '../utils/styles';

interface NavItemProps {
  item: NavItemType;
  expanded: boolean;
  expandedPaths: string[];
  onToggle: (path: string[]) => void;
  onSelect: (path: string[]) => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  expanded,
  expandedPaths,
  onToggle,
  onSelect,
}) => {
  const Icon = Icons[item.icon as keyof typeof Icons];
  const hasChildren = item.items && item.items.length > 0;
  const navigate = useNavigate();

  const handleClick = () => {
    onToggle([item.label]);
    if (!hasChildren) {
      onSelect([item.label]);
      navigate(item.path || '/');
    }
  };

  return (
    <div className="px-3">
      <button
        className={cn(
          "w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
          item.active
            ? "text-white bg-accent-500"
            : "text-gray-400 hover:text-white hover:bg-[#252729]"
        )}
        onClick={handleClick}
      >
        <Icon className="h-5 w-5 mr-3" />
        <span className="flex-1 text-left">{item.label}</span>
        {hasChildren && (
          <Icons.ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              expanded ? "transform rotate-90" : ""
            )}
          />
        )}
      </button>

      {expanded && hasChildren && (
        <div className="mt-1 ml-4 space-y-1">
          {item.items!.map((subItem) => (
            <NavSubItem
              key={subItem.label}
              item={subItem}
              depth={0}
              path={[item.label]}
              expanded={expandedPaths.includes([item.label, subItem.label].join('/'))}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};