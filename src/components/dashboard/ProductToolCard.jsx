/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCalendarAlt, FaChartLine, FaRocket, FaFilter, FaChartBar } from 'react-icons/fa';

const icons = {
    terminal: FaTerminal,
    calendar: FaCalendarAlt,
    chart: FaChartLine,
    ipo: FaRocket,
    filter: FaFilter,
    default: FaChartBar
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

function ProductToolCard({ name, icon }) {
    const IconComponent = icons[icon] || icons.default;
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)'}}
            className="bg-content-bg-alt p-4 rounded-lg border border-border-color/50 cursor-pointer text-center transition-all duration-150 ease-in-out"
        >
             <IconComponent size={24} className="mx-auto mb-2 text-primary" />
            <p className="text-xs font-semibold text-text-primary truncate">{name}</p>
        </motion.div>
    );
}

export default ProductToolCard;