/* eslint-disable no-unused-vars */
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockAllocationData, mockPortfolio } from '../../data/mockDashboardData';

const COLORS = ['#8B5CF6', '#10B981', '#EF4444', '#F59E0B', '#3B82F6', '#6366F1', '#EC4899', '#8D99AE'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if ((percent * 100) < 5) return null;

    return (
        <text x={x} y={y} fill="#F3F4F6" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-[10px] font-medium">
            {`${name} ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function AllocationPieChart() {
    const totalValue = mockPortfolio.reduce((sum, item) => {
         const isStock = item.type === 'stock' || item.type === 'etf';
         const currentValue = isStock ? (item.quantity ?? 0) * (item.currentPrice ?? 0) : (item.currentValue ?? 0);
         return sum + currentValue;
    }, 0);

    return (
        <div className="relative w-full h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                     <Pie
                         data={mockAllocationData}
                         cx="50%"
                         cy="50%"
                         labelLine={false}
                         label={renderCustomizedLabel}
                         outerRadius={100}
                         innerRadius={60} 
                         fill="#8884d8"
                         dataKey="value"
                         stroke={null} 
                         paddingAngle={1} 
                     >
                         {mockAllocationData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none outline-none" />
                         ))}
                     </Pie>
                     <Tooltip
                         cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                         contentStyle={{ backgroundColor: '#374151', border: 'none', borderRadius: '5px', color: '#F3F4F6' }}
                         itemStyle={{ color: '#F3F4F6' }}
                         formatter={(value) => [`₹${value.toFixed(2)}`, undefined]}
                     />
                 </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <p className="text-xs text-text-secondary">Total Value</p>
                 <p className="text-xl font-bold text-text-primary">₹{totalValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
             </div>
        </div>
    );
}

export default AllocationPieChart;