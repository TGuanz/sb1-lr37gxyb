import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppRoutes } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Layout>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <AppRoutes />
            </main>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
};