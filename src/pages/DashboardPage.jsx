// src/pages/DashboardPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/dashboard/DashboardCard';
import IndexCarousel from '../components/dashboard/IndexCarousel'; // Displays Indian Indices
import NewsFeed from '../components/dashboard/NewsFeed';
import IndexDisplay from '../components/dashboard/IndexDisplay'; // For Global Indices display
import { mockGlobalIndices } from '../data/mockDashboardData'; // Import only Global here now
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const containerVariants = { /* ... */ }; // Keep variants if needed

function DashboardPage() {
    // Removed totalPortfolioValue calculation as it's not used here anymore

  return (
    <motion.div
       initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
       className="p-4 sm:p-6" // Main page padding
    >
      {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Good morning, [User]!</h1>
        <p className="text-sm text-text-secondary mb-6">Here's your financial overview.</p>
      </motion.div>

      {/* --- Indices Section --- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6" // Add margin below indices
      >
        <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Market Snapshot</h2>
              <Link to="/indices" className="flex items-center text-xs font-medium text-primary hover:underline">
                  View All Indices
                  <FaAngleRight className="ml-1" size={10}/>
              </Link>
          </div>
          {/* Optional Heading */}
          {/* <h2 className="text-xs uppercase text-text-secondary font-semibold mb-3 tracking-wider">Market Overview</h2> */}
          <IndexCarousel /> {/* This component renders the Indian Indices */}
      </motion.div>
      {/* --------------------- */}


      {/* Main Dashboard Grid */}
      <motion.div
        variants={containerVariants} initial="hidden" animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Column 1 & 2 */}
        <div className="lg:col-span-2 space-y-6">
             {/* Portfolio Summary Card (Links to detail pages) */}
             <DashboardCard title="Portfolio Summary">
                 <div className="space-y-3">
                    <Link to="/stocks" className="flex justify-between items-center p-3 bg-content-bg-alt rounded-lg hover:bg-border-color/30 transition-colors group border border-border-color/50">
                        <span className="font-medium">Stocks Portfolio</span>
                        <FaArrowRight size={12} className="text-text-secondary group-hover:text-primary transition-colors"/>
                    </Link>
                     <Link to="/mutual-funds" className="flex justify-between items-center p-3 bg-content-bg-alt rounded-lg hover:bg-border-color/30 transition-colors group border border-border-color/50">
                        <span className="font-medium">Mutual Funds Portfolio</span>
                        <FaArrowRight size={12} className="text-text-secondary group-hover:text-primary transition-colors"/>
                    </Link>
                 </div>
             </DashboardCard>
             {/* Global Indices Card - Moved here for better balance maybe? */}
             <DashboardCard title="Global Indices">
                 {/* Grid layout for global indices */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {mockGlobalIndices.map(index => (
                         <IndexDisplay
                             key={index.name}
                             name={index.name}
                             value={index.value}
                             change={index.change}
                             positive={index.positive}
                         />
                      ))}
                 </div>
            </DashboardCard>
        </div>

        {/* Column 3 */}
        <div className="lg:col-span-1 space-y-6">
             {/* Removed Allocation Chart from main dash */}
             <DashboardCard title="Market News">
                 <NewsFeed />
                 <Link to="/news" className="text-xs text-primary hover:underline mt-3 inline-block font-medium">View More News</Link>
            </DashboardCard>
            {/* You could add another small widget here if needed */}
        </div>
      </motion.div>
    </motion.div>
  );
}
export default DashboardPage;