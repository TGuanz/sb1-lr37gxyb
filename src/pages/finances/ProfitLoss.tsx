import React from 'react';
import { Card } from '../../components/ui/Card';
import { LineChart } from '../../components/charts/LineChart';
import { BarChart } from '../../components/charts/BarChart';
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react';
import { useProfitLoss } from '../../hooks/useProfitLoss';

export const ProfitLoss: React.FC = () => {
  const { data, loading, error } = useProfitLoss();

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Profit and Loss</h1>
        <div className="animate-pulse space-y-4">
          <div className="h-64 bg-dark-700 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Profit and Loss</h1>
        <Card className="p-6">
          <p className="text-red-500">Error loading profit and loss data</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Profit and Loss</h1>
        <div className="flex items-center space-x-4">
          <select className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-sm text-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Revenue</p>
              <p className="text-2xl font-bold text-white mt-1">$84,254.00</p>
              <div className="flex items-center text-emerald-500 text-sm mt-1">
                <ArrowUpCircle className="h-4 w-4 mr-1" />
                <span>8.2%</span>
              </div>
            </div>
            <div className="h-16 w-32">
              <LineChart data={data?.revenue || []} height={60} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Expenses</p>
              <p className="text-2xl font-bold text-white mt-1">$45,234.00</p>
              <div className="flex items-center text-red-500 text-sm mt-1">
                <ArrowDownCircle className="h-4 w-4 mr-1" />
                <span>3.1%</span>
              </div>
            </div>
            <div className="h-16 w-32">
              <LineChart data={data?.expenses || []} height={60} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Net Profit</p>
              <p className="text-2xl font-bold text-white mt-1">$39,020.00</p>
              <div className="flex items-center text-emerald-500 text-sm mt-1">
                <ArrowUpCircle className="h-4 w-4 mr-1" />
                <span>12.5%</span>
              </div>
            </div>
            <div className="h-16 w-32">
              <LineChart data={data?.netProfit || []} height={60} />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Revenue vs Expenses</h3>
          <div className="h-80">
            <BarChart data={data?.comparison || []} height={320} stacked />
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Profit Margin</h3>
          <div className="h-80">
            <LineChart data={data?.profitMargin || []} height={320} multiline />
          </div>
        </Card>
      </div>
    </div>
  );
};