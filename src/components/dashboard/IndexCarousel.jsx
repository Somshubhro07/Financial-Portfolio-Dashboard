// src/components/dashboard/IndexCarousel.jsx
import React from 'react';
import { motion } from 'framer-motion';
import IndexDisplay from './IndexDisplay';
import { mockIndianIndices } from '../../data/mockDashboardData';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function IndexCarousel() {
    return (
        // Container with scrollbar hidden (on browsers that support it) & snap behavior
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide" // Key classes: overflow-x-auto, snap-x, snap-mandatory
        >
            {mockIndianIndices.map((index) => (
                // IndexDisplay already has itemVariants if needed, ensure key is unique
                <IndexDisplay
                    key={index.name}
                    name={index.name}
                    value={index.value}
                    change={index.change}
                    positive={index.positive}
                />
            ))}
        </motion.div>
    );
}

export default IndexCarousel;