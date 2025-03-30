// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardSidebar from './components/dashboard/DashboardSidebar';

// Import Page Components
import DashboardPage from './pages/DashboardPage';
import StocksPortfolioPage from './pages/StocksPortfolioPage';
import MutualFundsPortfolioPage from './pages/MutualFundsPortfolioPage';
import NewsPage from './pages/NewsPage';
import IndicesPage from './pages/IndicesPage'; // Import the new page

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-base-bg">
        <DashboardSidebar />
        <main className="flex-1 ml-64"> {/* Adjust margin if sidebar width changes */}
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/stocks" element={<StocksPortfolioPage />} />
            <Route path="/mutual-funds" element={<MutualFundsPortfolioPage />} />
            <Route path="/news" element={<NewsPage />} />
            {/* Add route for the Indian Indices page */}
            <Route path="/indices" element={<IndicesPage />} />
            {/* Add other routes */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;