import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Timesheets } from './staff/Timesheets';
import { Tasks } from './staff/Tasks';
import { Chat } from './staff/Chat';
import { KnowledgeBase } from './staff/KnowledgeBase';

export const Staff: React.FC = () => {
  return (
    <div className="space-y-6">
      <Routes>
        <Route path="/" element={<Navigate to="timesheets" replace />} />
        <Route path="timesheets" element={<Timesheets />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="chat" element={<Chat />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
      </Routes>
    </div>
  );
};