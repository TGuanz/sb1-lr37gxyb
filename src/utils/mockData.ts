import { addHours, format, subDays } from 'date-fns';

export const generateMockMetrics = () => ({
  totalRevenue: {
    value: 124500,
    change: 12.3,
    trend: 'up' as const,
  },
  averageOrderValue: {
    value: 85,
    change: 5.7,
    trend: 'up' as const,
  },
  conversionRate: {
    value: 3.2,
    change: -0.8,
    trend: 'down' as const,
  },
  activeCustomers: {
    value: 1250,
    change: 15.2,
    trend: 'up' as const,
  },
});

export const generateMockDeliveries = () => [
  {
    id: '1',
    status: 'in-transit',
    destination: 'New York, NY',
    eta: format(addHours(new Date(), 2), 'HH:mm'),
  },
  {
    id: '2',
    status: 'pending',
    destination: 'Los Angeles, CA',
    eta: format(addHours(new Date(), 5), 'HH:mm'),
  },
  {
    id: '3',
    status: 'delivered',
    destination: 'Chicago, IL',
    eta: format(addHours(new Date(), -1), 'HH:mm'),
  },
];

export const generateMockActivities = () => [
  {
    id: '1',
    name: 'John Doe',
    action: 'placed an order',
    timestamp: '5 minutes ago',
    value: 150,
  },
  {
    id: '2',
    name: 'Sarah Smith',
    action: 'started trial',
    timestamp: '15 minutes ago',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    action: 'subscribed',
    timestamp: '1 hour ago',
    value: 49,
  },
];

export const generateRevenueData = () => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: format(subDays(new Date(), 6 - i), 'MMM dd'),
    revenue: Math.floor(Math.random() * 10000) + 5000,
    orders: Math.floor(Math.random() * 100) + 50,
  }));
};

export const generateDeliveryStatusData = () => [
  { name: 'In Transit', value: 15 },
  { name: 'Delivered', value: 45 },
  { name: 'Pending', value: 10 },
];

export const generateCustomerGrowthData = () => {
  return Array.from({ length: 7 }, (_, i) => ({
    date: format(subDays(new Date(), 6 - i), 'MMM dd'),
    newCustomers: Math.floor(Math.random() * 50) + 20,
    activeCustomers: Math.floor(Math.random() * 200) + 800,
  }));
};

export const generateConversionFunnelData = () => {
  const visitors = 10000;
  const productViews = Math.floor(visitors * 0.6);
  const addToCart = Math.floor(productViews * 0.3);
  const checkouts = Math.floor(addToCart * 0.5);
  const purchases = Math.floor(checkouts * 0.8);

  return [
    {
      stage: 'Visitors',
      value: visitors,
      percentage: 100,
    },
    {
      stage: 'Product Views',
      value: productViews,
      percentage: Math.round((productViews / visitors) * 100),
    },
    {
      stage: 'Add to Cart',
      value: addToCart,
      percentage: Math.round((addToCart / visitors) * 100),
    },
    {
      stage: 'Checkout',
      value: checkouts,
      percentage: Math.round((checkouts / visitors) * 100),
    },
    {
      stage: 'Purchase',
      value: purchases,
      percentage: Math.round((purchases / visitors) * 100),
    },
  ];
};