// src/pages/StocksPortfolioPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/dashboard/DashboardCard';
import PortfolioTable from '../components/dashboard/PortfolioTable';
import AllocationPieChart from '../components/dashboard/AllocationPieChart';
import { mockPortfolio, mockAllocationData } from '../data/mockDashboardData'; // Import data

// Filter data for stocks
const stockPortfolio = mockPortfolio.filter(item => item.type === 'stock' || item.type === 'etf');
const stockAllocation = mockAllocationData.filter(item =>
    stockPortfolio.some(stock => stock.name === item.name)
);

function StocksPortfolioPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="p-6" // Add padding
        >
            <h1 className="text-3xl font-bold mb-6">Stocks Portfolio</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <DashboardCard title="Stock Holdings">
                        {/* Pass filtered data to PortfolioTable if needed, or modify PortfolioTable to accept data prop */}
                        <PortfolioTable /> {/* Modify PortfolioTable to filter or accept props */}
                    </DashboardCard>
                </div>
                <div>
                    <DashboardCard title="Stock Allocation">
                        {/* Pass filtered data to AllocationPieChart */}
                        <AllocationPieChart data={stockAllocation} /> {/* Modify Pie Chart to accept data prop */}
                    </DashboardCard>
                </div>
            </div>
        </motion.div>
    );
}
export default StocksPortfolioPage;