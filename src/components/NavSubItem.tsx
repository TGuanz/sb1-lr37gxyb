import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavSubItem as NavSubItemType } from '../types/navigation';
import { cn } from '../utils/styles';

interface NavSubItemProps {
  item: NavSubItemType;
  depth: number;
  path: string[];
  expanded: boolean;
  onToggle: (path: string[]) => void;
  onSelect: (path: string[]) => void;
}

export const NavSubItem: React.FC<NavSubItemProps> = ({
  item,
  depth,
  path,
  expanded,
  onToggle,
  onSelect,
}) => {
  const hasChildren = item.items && item.items.length > 0;
  const currentPath = [...path, item.label];
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = item.path === location.pathname;
  
  const handleClick = () => {
    if (hasChildren) {
      onToggle(currentPath);
    } else {
      onSelect(currentPath);
      if (item.path) {
        navigate(item.path);
      }
    }
  };
  
  return (
    <div>
      <button
        className={cn(
          "w-full flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200",
          hasChildren ? "font-medium" : "font-normal",
          isActive 
            ? "text-white bg-[#252729]" 
            : "text-gray-400 hover:text-white hover:bg-[#252729]",
          expanded && hasChildren && "mb-1"
        )}
        onClick={handleClick}
      >
        <span className="flex-1 text-left">{item.label}</span>
        {hasChildren && (
          <ChevronRight
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
              depth={depth + 1}
              path={currentPath}
              expanded={false}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};