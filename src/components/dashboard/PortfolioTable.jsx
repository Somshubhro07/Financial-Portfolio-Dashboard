// src/components/dashboard/PortfolioTable.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { mockPortfolio } from '../../data/mockDashboardData';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

function PortfolioTable() {
    return (
        <div className="overflow-x-auto"> {/* Make table scrollable horizontally if needed */}
            <table className="min-w-full divide-y divide-border-color/30">
                <thead>
                    <tr>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Qty</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Avg. Price</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Current Price / Value</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Investment</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Current Value</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">P&L (%)</th>
                        <th scope="col" className="px-4 py-2 text-center text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <motion.tbody
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="divide-y divide-border-color/30"
                >
                    {mockPortfolio.map(item => (
                        <PortfolioItem key={item.id} item={item} />
                    ))}
                </motion.tbody>
            </table>
        </div>
    );
}

export default PortfolioTable;