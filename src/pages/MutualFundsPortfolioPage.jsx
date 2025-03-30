/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/dashboard/DashboardCard';
import AllocationPieChart from '../components/dashboard/AllocationPieChart';
import { mockPortfolio, mockMfAllocationData, mockAllocationData } from '../data/mockDashboardData';

const mfPortfolio = mockPortfolio.filter(item => item.type === 'mf');
const mfAllocation = mockAllocationData.filter(item =>
    mfPortfolio.some(mf => mf.name === item.name)
);

const MFCard = ({ item }) => (
    <motion.div
        whileHover={{y:-5}}
        className="bg-content-bg-alt p-4 rounded-lg border border-border-color"
    >
        <p className="font-semibold text-text-primary">{item.name}</p>
        <div className="flex justify-between mt-2 text-sm">
            <span className="text-text-secondary">Invested:</span>
            <span className="font-medium">₹{item.invested?.toFixed(2)}</span>
        </div>
         <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Current:</span>
            <span className="font-medium">₹{item.currentValue?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mt-1 pt-1 border-t border-border-color/50">
             <span className="text-text-secondary">P&L:</span>
             <span className={`font-semibold ${ (item.currentValue - item.invested) >= 0 ? 'text-chart-green' : 'text-chart-red'}`}>
                ₹{(item.currentValue - item.invested).toFixed(2)}
             </span>
        </div>
    </motion.div>
);

function MutualFundsPortfolioPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="p-6"
        >
            <h1 className="text-3xl font-bold mb-6">Mutual Funds Portfolio</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mfPortfolio.map(item => <MFCard key={item.id} item={item} />)}
                </div>
                <div>
                    <DashboardCard title="Mutual Fund Allocation">
                        <AllocationPieChart data={mockMfAllocationData} />
                    </DashboardCard>
                </div>
            </div>
        </motion.div>
    );
}
export default MutualFundsPortfolioPage;