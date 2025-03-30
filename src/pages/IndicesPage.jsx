/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockIndianIndicesTableData, mockGlobalIndicesTableData } from '../data/mockDashboardData'; 
import IndicesTable from '../components/dashboard/IndicesTable'; 

const tabContentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};


function IndicesPage() {
    const [activeTab, setActiveTab] = useState('indian'); 

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="p-6 text-text-primary"
        >
            <motion.h1
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-6"
            >
                Market Indices
            </motion.h1>
            <div className="flex space-x-1 mb-5 border-b border-border-color">
                <button
                    onClick={() => setActiveTab('indian')}
                    className={`px-4 py-2 text-sm font-semibold transition-colors duration-150 ease-in-out border-b-2
                        ${activeTab === 'indian'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-secondary hover:text-text-primary'
                        }`}
                >
                    Indian Indices
                </button>
                <button
                    onClick={() => setActiveTab('global')}
                     className={`px-4 py-2 text-sm font-semibold transition-colors duration-150 ease-in-out border-b-2
                        ${activeTab === 'global'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-secondary hover:text-text-primary'
                        }`}
                >
                    Global Indices
                </button>
            </div>
             <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                className="bg-content-bg border border-border-color rounded-lg shadow-lg overflow-hidden"
            >
                <AnimatePresence mode="wait"> 
                    {activeTab === 'indian' && (
                        <motion.div
                            key="indian-table" 
                            variants={tabContentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <IndicesTable data={mockIndianIndicesTableData} />
                        </motion.div>
                    )}
                    {activeTab === 'global' && (
                         <motion.div
                            key="global-table"
                            variants={tabContentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                             <IndicesTable data={mockGlobalIndicesTableData} />
                         </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default IndicesPage;