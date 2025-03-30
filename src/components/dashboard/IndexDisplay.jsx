// src/components/dashboard/IndexDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

// Variants for staggering if used in a list
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

function IndexDisplay({ name, value, change, positive }) {
    const changeColor = positive ? 'text-chart-green' : 'text-chart-red';
    const ChangeIcon = positive ? FaCaretUp : FaCaretDown;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.03)' }} // Subtle hover
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="p-3 rounded-md border border-border-color/30 flex-shrink-0 w-48 snap-start" // For carousel: flex-shrink-0, width, snap-start
        >
            <p className="text-sm font-semibold text-text-primary truncate">{name}</p>
            <p className="text-lg font-bold text-text-primary my-1">{value?.toLocaleString() ?? 'N/A'}</p>
            <div className={`flex items-center text-xs ${changeColor}`}>
                <ChangeIcon className="mr-1" />
                <span>{change ?? 'N/A'}</span>
            </div>
        </motion.div>
    );
}

export default IndexDisplay;