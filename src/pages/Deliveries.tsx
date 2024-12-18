import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DispatchView } from './dispatch/DispatchView';

export const Deliveries: React.FC = () => {
  return (
    <div className="space-y-6">
      <Routes>
        <Route path="/" element={<Navigate to="dispatch" replace />} />
        <Route path="dispatch" element={<DispatchView />} />
        <Route path="reports" element={<div>Reports View</div>} />
        <Route path="clients" element={<div>Clients View</div>} />
        <Route path="history" element={<div>History View</div>} />
        <Route path="settings" element={<div>Settings View</div>} />
      </Routes>
    </div>
  );
};