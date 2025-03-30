/* eslint-disable no-unused-vars */
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockAllocationData, mockPortfolio } from '../../data/mockDashboardData'; // Import portfolio for total calculation

// Define colors (using new theme colors potentially)
const COLORS = ['#8B5CF6', '#10B981', '#EF4444', '#F59E0B', '#3B82F6', '#6366F1', '#EC4899', '#8D99AE']; // Example colors

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6; // Adjust label position
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Only show label if percent is large enough
    if ((percent * 100) < 5) return null;

    return (
        <text x={x} y={y} fill="#F3F4F6" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-[10px] font-medium">
            {`${name} ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function AllocationPieChart() {
    // Calculate Total Portfolio Value for center display
    const totalValue = mockPortfolio.reduce((sum, item) => {
         const isStock = item.type === 'stock' || item.type === 'etf';
         const currentValue = isStock ? (item.quantity ?? 0) * (item.currentPrice ?? 0) : (item.currentValue ?? 0);
         return sum + currentValue;
    }, 0);

    return (
        <div className="relative w-full h-[250px]"> {/* Use relative positioning for center text */}
             <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                     <Pie
                         data={mockAllocationData}
                         cx="50%"
                         cy="50%"
                         labelLine={false}
                         label={renderCustomizedLabel}
                         outerRadius={100} // Adjust size
                         innerRadius={60} // <<< THIS MAKES IT A DONUT CHART
                         fill="#8884d8"
                         dataKey="value"
                         stroke={null} // Remove stroke between slices
                         paddingAngle={1} // Add small angle between slices
                     >
                         {mockAllocationData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none outline-none" />
                         ))}
                     </Pie>
                     <Tooltip
                         cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} // Subtle cursor background
                         contentStyle={{ backgroundColor: '#374151', border: 'none', borderRadius: '5px', color: '#F3F4F6' }} // Use new theme colors
                         itemStyle={{ color: '#F3F4F6' }}
                         formatter={(value) => [`₹${value.toFixed(2)}`, undefined]} // Format value only
                     />
                    {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{color: '#9CA3AF', fontSize: '12px'}} /> */} {/* Optional: Legend can be verbose */}
                 </PieChart>
             </ResponsiveContainer>
             {/* Text in the middle */}
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <p className="text-xs text-text-secondary">Total Value</p>
                 <p className="text-xl font-bold text-text-primary">₹{totalValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
             </div>
        </div>
    );
}

export default AllocationPieChart;