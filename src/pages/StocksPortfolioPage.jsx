/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/dashboard/DashboardCard';
import PortfolioTable from '../components/dashboard/PortfolioTable';
import AllocationPieChart from '../components/dashboard/AllocationPieChart';
import { mockPortfolio, mockStockAllocationData } from '../data/mockDashboardData';

const stockPortfolio = mockPortfolio.filter(item => item.type === 'stock' || item.type === 'etf');

function StocksPortfolioPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="p-6"
        >
            <h1 className='text-3xl font-bold mb-6'>Stocks Portfolio</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <DashboardCard title="Stock Holdings">
                        <PortfolioTable portfolioData={stockPortfolio} />
                    </DashboardCard>
                </div>
                <div>
                    <DashboardCard title="Stock Allocation">
                        <AllocationPieChart data={mockStockAllocationData} />
                    </DashboardCard>
                </div>
            </div>
        </motion.div>
    );
}
export default StocksPortfolioPage;