/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; 

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

function PortfolioItem({ item }) {
    let currentValue, investment, profitLoss, profitLossPercent;
    const isStock = item.type === 'stock' || item.type === 'etf';

    if (isStock) {
        investment = (item.quantity ?? 0) * (item.avgPrice ?? 0);
        currentValue = (item.quantity ?? 0) * (item.currentPrice ?? 0);
        profitLoss = currentValue - investment;
        profitLossPercent = investment === 0 ? 0 : (profitLoss / investment) * 100;
    } else { 
        investment = item.invested ?? 0;
        currentValue = item.currentValue ?? 0;
        profitLoss = currentValue - investment;
        profitLossPercent = investment === 0 ? 0 : (profitLoss / investment) * 100;
    }

    const profitColor = profitLoss >= 0 ? 'text-chart-green' : 'text-chart-red';

    return (
        <motion.tr
            variants={itemVariants}
            className="border-b border-border-color/30 hover:bg-border-color/20 transition-colors"
        >
            <td className="px-4 py-3 text-sm font-medium text-text-primary whitespace-nowrap">{item.name}</td>
            <td className="px-4 py-3 text-sm text-text-secondary whitespace-nowrap">{isStock ? (item.quantity ?? 'N/A') : '-'}</td>
            <td className="px-4 py-3 text-sm text-text-secondary whitespace-nowrap">₹{isStock ? (item.avgPrice ?? 0).toFixed(2) : '-'}</td>
            <td className="px-4 py-3 text-sm text-text-secondary whitespace-nowrap">₹{isStock ? (item.currentPrice ?? 0).toFixed(2) : (item.currentValue ?? 0).toFixed(2)}</td>
            <td className="px-4 py-3 text-sm text-text-secondary whitespace-nowrap">₹{investment.toFixed(2)}</td>
            <td className="px-4 py-3 text-sm text-text-primary font-semibold whitespace-nowrap">₹{currentValue.toFixed(2)}</td>
            <td className={`px-4 py-3 text-sm font-semibold whitespace-nowrap ${profitColor}`}>
                ₹{profitLoss.toFixed(2)} ({profitLossPercent.toFixed(1)}%)
            </td>
            <td className="px-4 py-3 text-sm text-center">
                 <button className="text-text-secondary hover:text-primary transition-colors"><FaExternalLinkAlt size={12}/></button>
            </td>
        </motion.tr>
    );
}

export default PortfolioItem;