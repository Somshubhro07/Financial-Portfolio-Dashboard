/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
};

function DashboardCard({ children, className = '', title, titleIcon, actions }) {
  return (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`relative bg-content-bg border border-border-color rounded-xl shadow-lg overflow-hidden ${className} 
                   before:absolute before:inset-0 before:p-px before:rounded-xl 
                   before:bg-gradient-to-br before:from-primary/30 before:via-transparent before:to-transparent 
                   before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`}
    >
        {(title || actions) && (
            <div className="flex justify-between items-center px-4 pt-4 sm:px-5 sm:pt-4 pb-2 border-b border-border-color">
                 <h2 className="flex items-center text-base font-semibold text-text-primary">
                     {titleIcon && <span className="mr-2 text-primary">{titleIcon}</span>}
                     {title}
                 </h2>
                 {actions && <div className="text-xs">{actions}</div>}
            </div>
        )}
        <div className="p-4 sm:p-5">
            {children}
        </div>
    </motion.div>
  );
}

export default DashboardCard;