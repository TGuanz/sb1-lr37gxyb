export interface NavSubItem {
  label: string;
  items?: NavSubItem[];
  path?: string;
}

export interface NavItem {
  label: string;
  icon: string;
  items?: NavSubItem[];
  active?: boolean;
  path?: string;
}

export interface NavigationState {
  activeItem: string;
  expandedItems: string[];
}