/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiX } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineChartPie, HiOutlineNewspaper } from "react-icons/hi";
import { FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import somgLogo from '../../assets/images/logo.png';

const navLinks = [
    { name: 'Dashboard', path: '/', icon: RxDashboard },
    { name: 'Stocks', path: '/stocks', icon: FaChartLine },
    { name: 'Mutual Funds', path: '/mutual-funds', icon: HiOutlineChartPie },
    { name: 'News', path: '/news', icon: HiOutlineNewspaper },
    { name: 'Account UI', path: '/account-ui-project', icon: FaMoneyBillWave },
];

const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 }
};

const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        }
    }
};

const navItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 }
};


function DashboardSidebar({ isOpen, setIsOpen }) {
    const location = useLocation();

    const handleLinkClick = () => {
        if (window.innerWidth < 1024) {
             setIsOpen(false);
        }
    }

    return (
        <motion.div
            className={`w-64 bg-sidebar-bg h-screen p-4 flex flex-col fixed top-0 left-0 border-r border-border-color z-30 
                       transform transition-transform duration-300 ease-in-out 
                       ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                       lg:translate-x-0`} 
        >
            <div className="h-16 flex items-center justify-between mb-8 px-2 shrink-0"> 
                 <img
                    src={somgLogo}
                    alt="Somg Logo"
                    className="h-8 w-auto"
                 />
                 <button
                     onClick={() => setIsOpen(false)}
                     className="text-text-secondary hover:text-text-primary lg:hidden" 
                     aria-label="Close sidebar"
                 >
                     <HiX size={24}/>
                 </button>
            </div>

            <nav className="flex flex-col space-y-2 flex-grow overflow-y-auto"> 
               {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;
                    return (
                        <div key={link.name}>
                             <Link
                                 to={link.path}
                                 onClick={handleLinkClick}
                             >
                                <div
                                     className={`flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150 ease-in-out group ${isActive ? 'bg-primary/10 text-primary shadow-glow-primary' : 'text-text-secondary hover:text-text-primary hover:bg-content-bg/50'}`}
                                >
                                     <Icon size={18} className={`transition-colors shrink-0 ${isActive ? 'text-primary' : 'text-text-secondary group-hover:text-text-primary'}`} />
                                     <span className="truncate">{link.name}</span> 
                                 </div>
                             </Link>
                        </div>
                    );
                })}
            </nav>
        </motion.div>
    );
}

export default DashboardSidebar;