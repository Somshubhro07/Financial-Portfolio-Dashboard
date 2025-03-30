// src/components/dashboard/NewsFeed.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { mockNews } from '../../data/mockDashboardData';

const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
};

function NewsFeed() {
    return (
        <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border-color scrollbar-track-content-bg" // Max height and scroll
        >
            {mockNews.map(item => (
                <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="pb-2 border-b border-border-color/30 last:border-b-0"
                >
                    <p className="text-sm font-medium text-text-primary hover:text-primary transition-colors cursor-pointer leading-tight">{item.headline}</p>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-secondary font-semibold">{item.source}</span>
                        <span className="text-xs text-text-secondary">{item.time}</span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
// Need to install and configure scrollbar plugin for styling: npm install -D tailwind-scrollbar
// Add to tailwind.config.js plugins: require('tailwind-scrollbar'),
export default NewsFeed;