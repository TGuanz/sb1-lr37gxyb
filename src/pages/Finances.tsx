import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProfitLoss } from './finances/ProfitLoss';
import { CashFlow } from './finances/CashFlow';
import { Projections } from './finances/Projections';
import { Forecast } from './finances/Forecast';
import { Capital } from './finances/Capital';


export const Finances: React.FC = () => {
  return (
    <div className="space-y-6">
      <Routes>
        <Route path="/" element={<Navigate to="profit-loss" replace />} />
        <Route path="profit-loss" element={<ProfitLoss />} />
        <Route path="cash-flow" element={<CashFlow />} />
        <Route path="projections" element={<Projections />} />
        <Route path="forecast" element={<Forecast />} />
        <Route path="capital" element={<Capital />} />
      </Routes>
    </div>
  );
};