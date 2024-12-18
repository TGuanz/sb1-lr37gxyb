import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Overview } from '../components/Overview';
import { ECommerce } from '../pages/ECommerce';
import { CRM } from '../pages/CRM';
import { Deliveries } from '../pages/Deliveries';
import { Marketing } from '../pages/Marketing';
import { Finances } from '../pages/Finances';
import { Staff } from '../pages/Staff';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/e-commerce/*" element={<ECommerce />} />
      <Route path="/crm/*" element={<CRM />} />
      <Route path="/deliveries/*" element={<Deliveries />} />
      <Route path="/marketing/*" element={<Marketing />} />
      <Route path="/finances/*" element={<Finances />} />
      <Route path="/staff/*" element={<Staff />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};