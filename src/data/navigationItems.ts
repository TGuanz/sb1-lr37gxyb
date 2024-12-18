import { NavItem } from '../types/navigation';

export const navigationItems: NavItem[] = [
  {
    label: 'Overview',
    icon: 'LayoutDashboard',
    path: '/',
  },
  {
    label: 'E-Commerce',
    icon: 'ShoppingBag',
    items: [
      {
        label: 'Orders',
        items: [
          { label: 'Drafts', path: '/e-commerce/orders/drafts' },
          { label: 'Shipping Labels', path: '/e-commerce/orders/shipping' },
          { label: 'Abandoned Checkouts', path: '/e-commerce/orders/abandoned' }
        ]
      }
    ]
  },
  {
    label: 'CRM',
    icon: 'Users',
    items: [
      {
        label: 'Manage Accounts',
        items: [
          { label: 'Dashboard', path: '/crm/accounts/dashboard' },
          { label: 'Accounts', path: '/crm/accounts/list' },
          { label: 'Interactions', path: '/crm/accounts/interactions' },
          { label: 'Contacts', path: '/crm/accounts/contacts' }
        ]
      }
    ]
  },
  {
    label: 'B2B Deliveries',
    icon: 'Truck',
    items: [
      { label: 'Dispatch', path: '/deliveries/dispatch' },
      { label: 'Reports', path: '/deliveries/reports' },
      { label: 'Clients', path: '/deliveries/clients' },
      { label: 'History', path: '/deliveries/history' },
      { label: 'Settings', path: '/deliveries/settings' }
    ]
  },
  {
    label: 'Marketing',
    icon: 'Megaphone',
    items: [
      {
        label: 'Campaigns',
        items: [
          { label: 'Active', path: '/marketing/campaigns/active' },
          { label: 'Scheduled', path: '/marketing/campaigns/scheduled' }
        ]
      }
    ]
  },
  {
    label: 'Finances',
    icon: 'DollarSign',
    items: [
      { label: 'Profit and Loss', path: '/finances/profit-loss' },
      { label: 'Cash Flow', path: '/finances/cash-flow' },
      { label: 'Projections', path: '/finances/projections' },
      { label: 'Forecast', path: '/finances/forecast' },
      { label: 'Capital', path: '/finances/capital' }
    ]
  },
  {
    label: 'Staff',
    icon: 'Users2',
    items: [
      { label: 'Timesheets', path: '/staff/timesheets' },
      { label: 'Tasks', path: '/staff/tasks' },
      { label: 'Chat', path: '/staff/chat' },
      { label: 'Knowledge Base', path: '/staff/knowledge-base' }
    ]
  }
];