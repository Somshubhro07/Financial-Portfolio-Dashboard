/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardSidebar from './components/dashboard/DashboardSidebar';
import DashboardFooter from './components/dashboard/DashboardFooter';
import MobileHeader from './components/dashboard/MobileHeader';
import DashboardPage from './pages/DashboardPage'; 
import StocksPortfolioPage from './pages/StocksPortfolioPage';
import MutualFundsPortfolioPage from './pages/MutualFundsPortfolioPage';
import NewsPage from './pages/NewsPage';
import IndicesPage from './pages/IndicesPage';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const yourName = "Somshubhro Guha"; 
    const yourEmail = "guha.somshubhro@gmail.com"; 
    const yourGithub = "https://github.com/Somshubhro07/";
    const yourLinkedin = "https://www.linkedin.com/in/somshubhro-guha-46b892272/";

    return (
        <BrowserRouter>
            <div className="flex min-h-screen bg-base-bg">
                <DashboardSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

                <div className={`flex flex-col flex-1 overflow-y-auto lg:ml-64`}>
                    <MobileHeader onMenuClick={() => setIsSidebarOpen(true)} />

                    <main className="flex-grow"> 
                        <Routes>
                            <Route path="/" element={<DashboardPage />} />
                            <Route path="/stocks" element={<StocksPortfolioPage />} />
                            <Route path="/mutual-funds" element={<MutualFundsPortfolioPage />} />
                            <Route path="/news" element={<NewsPage />} />
                            <Route path="/indices" element={<IndicesPage />} />
                        </Routes>
                    </main>
                    <DashboardFooter
                        name={yourName} email={yourEmail} githubUrl={yourGithub} linkedinUrl={yourLinkedin}
                    />
                </div>
                 <AnimatePresence>
                     {isSidebarOpen && (
                         <motion.div
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                             onClick={() => setIsSidebarOpen(false)}
                             className="fixed inset-0 bg-black/60 z-20 lg:hidden" 
                          />
                     )}
                </AnimatePresence>
            </div>
        </BrowserRouter>
    );
}
export default App;