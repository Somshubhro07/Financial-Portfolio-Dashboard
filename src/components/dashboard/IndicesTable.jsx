// src/components/dashboard/IndicesTable.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { isChangePositive } from '../../data/mockDashboardData'; // Import helper

const tableContainerVariants = { /* ... from previous IndianIndicesPage ... */ };
const tableRowVariants = { /* ... from previous IndianIndicesPage ... */ };

// Accepts data array as prop
function IndicesTable({ data = [] }) {
    if (!data || data.length === 0) {
        return <p className="text-text-secondary text-center py-10">No index data available.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-color">
                <thead className="bg-content-bg-alt sticky top-0 z-10">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Index Name</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Last Traded</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Day Change</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">High</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Low</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Open</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">Prev. Close</th>
                    </tr>
                </thead>
                <motion.tbody
                    variants={tableContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="divide-y divide-border-color/50"
                >
                    {data.map((index) => {
                        const positive = isChangePositive(index.changeStr);
                        const changeColor = positive ? 'text-chart-green' : 'text-chart-red';
                        return (
                            <motion.tr
                                key={index.name}
                                variants={tableRowVariants}
                                className="hover:bg-content-bg-alt/50 transition-colors duration-150"
                            >
                                <td className="px-4 py-3 text-sm font-medium text-text-primary whitespace-nowrap">{index.name}</td>
                                <td className="px-4 py-3 text-sm text-text-primary font-semibold text-right whitespace-nowrap">{(index.last ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className={`px-4 py-3 text-sm font-medium text-right whitespace-nowrap ${changeColor}`}>{index.changeStr ?? 'N/A'}</td>
                                <td className="px-4 py-3 text-sm text-text-secondary text-right whitespace-nowrap">{(index.high ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="px-4 py-3 text-sm text-text-secondary text-right whitespace-nowrap">{(index.low ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="px-4 py-3 text-sm text-text-secondary text-right whitespace-nowrap">{(index.open ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="px-4 py-3 text-sm text-text-secondary text-right whitespace-nowrap">{(index.prevClose ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </motion.tr>
                        );
                    })}
                </motion.tbody>
            </table>
        </div>
    );
}

export default IndicesTable;