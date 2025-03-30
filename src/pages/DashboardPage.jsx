/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardCard from '../components/dashboard/DashboardCard';
import IndexCarousel from '../components/dashboard/IndexCarousel';
import NewsFeed from '../components/dashboard/NewsFeed';
import IndexDisplay from '../components/dashboard/IndexDisplay';
import SmallStockCard from '../components/dashboard/SmallStockCard';
import ProductToolCard from '../components/dashboard/ProductToolCard';
import {
    mockIndianIndices, mockGlobalIndicesTableData as mockGlobalIndices,
    mockNews, mockPortfolio, mockMostTraded, mockProductsTools, mockTopGainers, mockEtfsBySomg
} from '../data/mockDashboardData';
import { FaArrowRight, FaChartBar, FaBriefcase, FaPlus, FaAngleRight } from 'react-icons/fa';
import { HiOutlineNewspaper, HiOutlineGlobeAlt, HiOutlineEye, HiOutlineTrendingUp, HiOutlineCollection, HiOutlineSparkles } from 'react-icons/hi';

const containerVariants = {  };
const gridItemVariants = { };

function DashboardPage() {
    const topIndianIndices = mockIndianIndices.slice(0, 6);

    const safeMockPortfolio = Array.isArray(mockPortfolio) ? mockPortfolio : [];

    const currentValue = safeMockPortfolio.reduce((sum, item) => {
        let itemValue = 0;
        try {
            const isStock = item?.type === 'stock' || item?.type === 'etf';
            const quantity = Number(item?.quantity);
            const currentPrice = Number(item?.currentPrice);
            const mfValue = Number(item?.currentValue);

            if (isStock && !isNaN(quantity) && !isNaN(currentPrice)) {
                itemValue = quantity * currentPrice;
            } else if (!isStock && !isNaN(mfValue)) { 
                itemValue = mfValue;
            } else if (item) { 
                 console.warn("Skipping value calculation for item:", item);
            }
        } catch (e) { console.error("Error calc value:", item, e); }
        return sum + itemValue; 
    }, 0);

    const totalInvestment = safeMockPortfolio.reduce((sum, item) => {
         let itemInvestment = 0;
         try {
            const isStock = item?.type === 'stock' || item?.type === 'etf';
            const quantity = Number(item?.quantity);
            const avgPrice = Number(item?.avgPrice);
            const mfInvested = Number(item?.invested);

            if (isStock && !isNaN(quantity) && !isNaN(avgPrice)) {
                itemInvestment = quantity * avgPrice;
            } else if (!isStock && !isNaN(mfInvested)) { 
                itemInvestment = mfInvested;
            } else if (item) {
                 console.warn("Skipping investment calculation for item:", item);
            }
         } catch(e) { console.error("Error calc investment:", item, e); }
        return sum + itemInvestment; 
    }, 0);

    const totalReturns = (currentValue || 0) - (totalInvestment || 0);

    console.log("DashboardPage Values:", { currentValue, totalInvestment, totalReturns });


    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="p-4 sm:p-6"
        >
            <motion.div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Good morning, [User]!</h1>
                <p className="text-sm text-text-secondary mt-1">Here's your financial overview.</p>
            </motion.div>

            <motion.div  className="mb-8">
                 <div className="flex justify-between items-center mb-3">
                     <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Market Snapshot</h2>
                     <Link to="/indices" className="flex items-center text-xs font-medium text-primary hover:underline">
                         All Indices <FaAngleRight className="ml-1" size={10}/>
                     </Link>
                 </div>
                 <IndexCarousel />
             </motion.div>

            <motion.div
                variants={containerVariants} initial="hidden" animate="visible"
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
                <div className="flex flex-col space-y-6 lg:col-span-1">
                    <motion.div variants={gridItemVariants}>
                         <DashboardCard title="Your Investments" titleIcon={<FaBriefcase />} actions={<Link to="/stocks" className="text-xs text-primary hover:underline">Details</Link>} className="shadow-glow-primary">
                              <div className="text-center py-4">
                                 <p className="text-xs text-text-secondary mb-1">Current Value</p>
                                 <p className="text-2xl font-bold text-text-primary mb-3">
                                     ₹ {(currentValue ?? 0).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
                                 </p>
                                 <p className="text-xs text-text-secondary mb-1">Total Returns</p>
                                 <p className={`text-lg font-semibold ${totalReturns >= 0 ? 'text-chart-green' : 'text-chart-red'}`}>
                                     {totalReturns >= 0 ? '+' : ''}₹ {(totalReturns ?? 0).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
                                 </p>
                             </div>
                          </DashboardCard>
                     </motion.div>
                     <motion.div variants={gridItemVariants}>
                         <DashboardCard title="Products & tools" titleIcon={<HiOutlineCollection />}>
                              <div className="grid grid-cols-3 gap-3">
                                 {mockProductsTools.map(tool => <ProductToolCard key={tool.name} {...tool}/>)}
                              </div>
                         </DashboardCard>
                     </motion.div>
                     <motion.div variants={gridItemVariants}>
                          <DashboardCard title="ETFs by Somg" titleIcon={<HiOutlineSparkles />} actions={<a href="#" className="text-xs text-primary hover:underline">See more</a>}>
                              <div className="grid grid-cols-1 gap-3">
                                  {mockEtfsBySomg.slice(0,3).map(etf => <SmallStockCard key={etf.name} {...etf} />)}
                              </div>
                          </DashboardCard>
                     </motion.div>
                </div>

                 <div className="flex flex-col space-y-6 lg:col-span-1">
                     <motion.div variants={gridItemVariants}>
                         <DashboardCard title="Most traded on Somg" titleIcon={<FaChartBar />} actions={<a href="#" className="text-xs text-primary hover:underline">See more</a>}>
                             <div className="grid grid-cols-2 gap-3">
                                 {mockMostTraded.map(stock => <SmallStockCard key={stock.name} {...stock} />)}
                             </div>
                         </DashboardCard>
                     </motion.div>
                    <motion.div variants={gridItemVariants}>
                         <DashboardCard title="Top Gainers" titleIcon={<HiOutlineTrendingUp />} actions={<a href="#" className="text-xs text-primary hover:underline">See more</a>}>
                              <div className="grid grid-cols-2 gap-3">
                                 {mockTopGainers.slice(0,4).map(stock => <SmallStockCard key={stock.name} {...stock} />)}
                              </div>
                         </DashboardCard>
                    </motion.div>
                 </div>

                 <div className="flex flex-col space-y-6 lg:col-span-1">
                     <motion.div variants={gridItemVariants}>
                        <DashboardCard title="My Watchlist" titleIcon={<HiOutlineEye />} actions={<Link to="#" className="text-xs text-primary hover:underline">View all</Link>}>
                             <div className="space-y-2 text-sm py-2 min-h-[100px]">
                                <p className="text-text-secondary">Watchlist Item 1...</p>
                                <p className="text-text-secondary">Watchlist Item 2...</p>
                             </div>
                              <button className="mt-2 w-full text-center text-xs text-primary font-semibold hover:underline flex items-center justify-center"><FaPlus size={10} className="mr-1"/> Create new watchlist</button>
                         </DashboardCard>
                     </motion.div>
                     <motion.div variants={gridItemVariants}>
                         <DashboardCard title="Stocks in News" titleIcon={<HiOutlineNewspaper />} actions={<Link to="/news" className="text-xs text-primary hover:underline">More News</Link>}>
                             <NewsFeed />
                         </DashboardCard>
                    </motion.div>
                     <motion.div variants={gridItemVariants}>
                        <DashboardCard title="Global Indices" titleIcon={<HiOutlineGlobeAlt />}>
                             <div className="space-y-3 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-border-color scrollbar-track-content-bg pr-1">
                                 {mockGlobalIndices.map(index => ( <IndexDisplay key={index.name} {...index} /> ))}
                             </div>
                         </DashboardCard>
                    </motion.div>
                 </div>
            </motion.div>
        </motion.div>
    );
}
export default DashboardPage;