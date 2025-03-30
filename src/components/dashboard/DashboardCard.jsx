/* eslint-disable no-unused-vars */
// src/components/dashboard/DashboardCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
// ** Make sure the incorrect self-import line is removed **

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function DashboardCard({ children, className = '', title }) {
    return (
      <motion.div
        variants={cardVariants}
        // Apply frosted glass effect: semi-transparent bg, backdrop blur, subtle border
        className={`backdrop-blur-md bg-content-bg/70 border border-border-color/60 rounded-xl shadow-lg overflow-hidden ${className}`}
      >
        {title && (
            <h2 className="text-base sm:text-lg font-semibold text-text-primary px-4 pt-4 sm:px-6 sm:pt-5 pb-2 border-b border-border-color/60">
              {title}
            </h2>
        )}
        {/* Add padding to content area *within* the card */}
        <div className="p-4 sm:p-6">
            {children}
        </div>
      </motion.div>
    );
  }

export default DashboardCard;