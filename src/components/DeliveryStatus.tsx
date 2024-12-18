import React from 'react';
import { Truck, Package, CheckCircle } from 'lucide-react';
import { DeliveryStatus as DeliveryStatusType } from '../types/dashboard';

interface DeliveryStatusProps {
  deliveries: DeliveryStatusType[];
}

export const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ deliveries }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'in-transit':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Deliveries</h2>
      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {getStatusIcon(delivery.status)}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {delivery.destination}
                </p>
                <p className="text-sm text-gray-500">ETA: {delivery.eta}</p>
              </div>
            </div>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                delivery.status === 'delivered'
                  ? 'bg-green-100 text-green-800'
                  : delivery.status === 'in-transit'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {delivery.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};