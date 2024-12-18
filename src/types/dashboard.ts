export interface SalesMetric {
  value: number;
  change: number;
  trend: 'up' | 'down';
}

export interface DashboardMetrics {
  totalRevenue: SalesMetric;
  averageOrderValue: SalesMetric;
  conversionRate: SalesMetric;
  activeCustomers: SalesMetric;
}

export interface DeliveryStatus {
  id: string;
  status: 'pending' | 'in-transit' | 'delivered';
  destination: string;
  eta: string;
}

export interface CustomerActivity {
  id: string;
  name: string;
  action: string;
  timestamp: string;
  value?: number;
}