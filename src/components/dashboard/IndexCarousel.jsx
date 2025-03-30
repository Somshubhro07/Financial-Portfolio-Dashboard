/* eslint-disable no-unused-vars */
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
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide" 
        >
            {mockIndianIndices.map((index) => (
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