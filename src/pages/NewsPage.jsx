/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/dashboard/DashboardCard';
import NewsFeed from '../components/dashboard/NewsFeed'; 

function NewsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="p-6"
        >
            <h1 className="text-3xl font-bold mb-6">Financial News</h1>
            <DashboardCard>
                 <NewsFeed />
            </DashboardCard>
        </motion.div>
    );
}
export default NewsPage;