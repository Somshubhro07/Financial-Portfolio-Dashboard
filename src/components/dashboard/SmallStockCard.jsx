/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { isChangePositive } from '../../data/mockDashboardData';

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

function SmallStockCard({ name, price, change, logo }) {
    const positive = isChangePositive(change);
    const changeColor = positive ? 'text-chart-green' : 'text-chart-red';

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -3, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}
            className="bg-content-bg-alt p-3 rounded-lg border border-border-color/50 cursor-pointer transition-all duration-150 ease-in-out"
        >
            <p className="text-xs font-medium text-text-primary truncate mb-1">{name}</p>
            <p className="text-sm font-semibold text-text-primary">₹{price?.toLocaleString()}</p>
            <p className={`text-xs font-medium ${changeColor}`}>{change}</p>
        </motion.div>
    );
}

export default SmallStockCard;