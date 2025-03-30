/* eslint-disable no-unused-vars */
// src/components/dashboard/DashboardSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// Import relevant icons
import { RxDashboard } from "react-icons/rx";
import { HiOutlineChartPie, HiOutlineNewspaper } from "react-icons/hi";
import { FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const navLinks = [
    { name: 'Dashboard', path: '/', icon: RxDashboard },
    { name: 'Stocks', path: '/stocks', icon: FaChartLine },
    { name: 'Mutual Funds', path: '/mutual-funds', icon: HiOutlineChartPie },
    { name: 'News', path: '/news', icon: HiOutlineNewspaper },
    // Add links to your first project if desired
    { name: 'Account UI', path: '/account-ui-project', icon: FaMoneyBillWave }, // Example link to other project
];

const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.4, ease: 'easeInOut' } }
};

const navContainerVariants = { /* ... from previous sidebar ... */ };
const navItemVariants = { /* ... from previous sidebar ... */ };

function DashboardSidebar() {
    const location = useLocation();

    return (
        <motion.div
            // variants={sidebarVariants} // Optional: slide in whole sidebar
            // initial="hidden"
            // animate="visible"
            className="w-64 bg-sidebar-bg h-screen p-5 flex flex-col fixed top-0 left-0 border-r border-border-color z-10" // Fixed position sidebar
        >
            {/* Logo/Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="mb-10 text-center"
             >
                 <h1 className="text-2xl font-bold text-text-primary">FinDash</h1>
                 <p className="text-xs text-secondary">Portfolio Tracker</p>
            </motion.div>

            {/* Navigation */}
            <motion.nav
                 variants={navContainerVariants} initial="hidden" animate="visible"
                 className="flex flex-col space-y-3 flex-grow"
            >
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;
                    return (
                        <motion.div key={link.name} variants={navItemVariants}>
                            <Link
                                to={link.path}
                                className={`flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150 ease-in-out
                                    ${isActive
                                        ? 'bg-primary/10 text-primary shadow-glow-primary' // Active state with glow
                                        : 'text-text-secondary hover:text-text-primary hover:bg-content-bg'
                                    }`}
                            >
                                <Icon size={18} />
                                <span>{link.name}</span>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.nav>

             {/* Footer/User Section (Optional) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                {/* Add user info or settings link here */}
            </motion.div>
        </motion.div>
    );
}

export default DashboardSidebar;