// src/data/mockDashboardData.js

// Example Candlestick Data (Needs TIME, OPEN, HIGH, LOW, CLOSE)
// Time should ideally be a UNIX timestamp (seconds)
export const mockCandlestickData = [
    { time: 1678886400, open: 170.34, high: 171.8, low: 169.9, close: 171.5 },
    { time: 1678972800, open: 171.6, high: 172.5, low: 170.8, close: 172.2 },
    { time: 1679059200, open: 172.1, high: 173.0, low: 171.0, close: 171.8 },
    // ... add many more data points for a realistic chart
];

// Example Volume Data (Needs TIME, VALUE, COLOR)
export const mockVolumeData = [
    { time: 1678886400, value: 150000, color: 'rgba(44, 182, 125, 0.5)' }, // Green
    { time: 1678972800, value: 180000, color: 'rgba(44, 182, 125, 0.5)' }, // Green
    { time: 1679059200, value: 120000, color: 'rgba(228, 88, 88, 0.5)' },  // Red
    // ... match timestamps with candlestick data
];


// Example Index Data



// Example News Headlines
export const mockNews = [
    { id: 'n1', source: 'Economic Times', headline: 'Market hits record high as banks rally', time: '1h ago' },
    { id: 'n2', source: 'Reuters', headline: 'RBI keeps repo rate unchanged amid inflation concerns', time: '3h ago' },
    { id: 'n3', source: 'Bloomberg', headline: 'Global tech stocks dip on profit-taking', time: '5h ago' },
    // Add more...
];

// Calculated data for Pie Chart (you'd calculate this based on mockPortfolio)
export const mockAllocationData = [
    { name: 'IRFC', value: 17520.00 }, // currentPrice * quantity
    { name: 'SBI', value: 42025.00 },
    { name: 'Reliance', value: 59015.00 },
    { name: 'NIFTY BEES', value: 53020.00 },
    { name: 'NHPC', value: 17250.00 },
    { name: 'IOC', value: 13464.00 },
    { name: 'Quant Small Cap', value: 58750.00 }, // currentValue
    { name: 'Motilal Midcap', value: 81200.50 },
];

export const mockIndianIndices = [
    { name: 'NIFTY 50', value: 23519.35, change: '-72.60 (-0.31%)', positive: false },
    { name: 'SENSEX', value: 77414.92, change: '-191.51 (-0.20%)', positive: false },
    { name: 'NIFTY BANK', value: 51564.85, change: '-11.00 (-0.02%)', positive: false },
    { name: 'NIFTY MIDCAP SELECT', value: 11546.00, change: '+30.20 (+0.26%)', positive: true }, // Example Midcap
    { name: 'FINNIFTY', value: 23074.90, change: '+63.75 (+0.28%)', positive: true }, // Updated Finnifty value
    { name: 'BSE BANKEX', value: 59542.38, change: '+213.30 (+0.36%)', positive: true }, // Updated Bankex value
];

// NEW: Detailed data for the Indian Indices Table Page (based on your screenshot)
export const mockIndianIndicesTableData = [
    { name: 'NIFTY 50', last: 23519.35, changeStr: '-72.60 (0.31%)', high: 23649.20, low: 23450.20, open: 23600.40, prevClose: 23591.95 },
    { name: 'NIFTY Bank', last: 51564.85, changeStr: '-11.00 (0.02%)', high: 51839.10, low: 51335.35, open: 51808.40, prevClose: 51575.85 }, // Note: Screenshot value differs slightly, used number from image
    { name: 'FINNIFTY', last: 23074.90, changeStr: '+63.75 (0.28%)', high: 23199.05, low: 22937.35, open: 23034.05, prevClose: 23011.15 }, // Updated values based on image
    { name: 'Bse Sensex', last: 77414.92, changeStr: '-191.51 (0.25%)', high: 77766.70, low: 77185.62, open: 77690.09, prevClose: 77606.43 }, // Note: Percentage slightly different in image
    { name: 'Nifty Midcap Select', last: 11546.00, changeStr: '+30.20 (0.26%)', high: 11701.05, low: 11470.15, open: 11619.95, prevClose: 11515.80 }, // Note: Percentage slightly different in image
    { name: 'Bse Bankex', last: 59542.38, changeStr: '+213.30 (0.36%)', high: 59820.53, low: 59189.27, open: 59367.40, prevClose: 59329.08 },
    { name: 'India Vix', last: 12.72, changeStr: '-0.58 (4.36%)', high: 13.61, low: 12.57, open: 13.30, prevClose: 13.30 },
    { name: 'Nifty Total Market', last: 11984.90, changeStr: '-41.25 (0.34%)', high: 12094.55, low: 11951.30, open: 12044.60, prevClose: 12026.15 },
    { name: 'NIFTY Next 50', last: 63043.20, changeStr: '-399.35 (0.63%)', high: 63916.90, low: 62917.75, open: 63471.80, prevClose: 63442.55 },
    { name: 'NIFTY 100', last: 24067.35, changeStr: '-87.70 (0.36%)', high: 24220.75, low: 23992.80, open: 24154.15, prevClose: 24145.05 },
    { name: 'NIFTY Midcap 100', last: 51672.25, changeStr: '-167.15 (0.32%)', high: 52473.20, low: 51447.40, open: 52083.15, prevClose: 51839.40 },
    { name: 'Bse 100', last: 24577.80, changeStr: '-94.00 (0.38%)', high: 24754.83, low: 24518.36, open: 24698.55, prevClose: 24671.80 },
    { name: 'NIFTY 500', last: 21339.55, changeStr: '-68.40 (0.32%)', high: 21514.10, low: 21277.90, open: 21439.20, prevClose: 21407.95 },
    { name: 'NIFTY Auto', last: 21295.50, changeStr: '-221.25 (1.03%)', high: 21577.20, low: 21200.75, open: 21570.20, prevClose: 21516.75 }, // Note: Percentage slightly different in image
    { name: 'NIFTY Smallcap 100', last: 16095.70, changeStr: '-24.15 (0.15%)', high: 16350.85, low: 16046.10, open: 16197.60, prevClose: 16119.85 },
    { name: 'NIFTY FMCG', last: 53589.80, changeStr: '+313.20 (0.59%)', high: 54150.90, low: 53198.80, open: 53198.80, prevClose: 53276.60 },
    { name: 'NIFTY Metal', last: 9092.50, changeStr: '-67.30 (0.73%)', high: 9235.20, low: 9045.10, open: 9172.90, prevClose: 9159.80 },
    { name: 'NIFTY Pharma', last: 21137.45, changeStr: '-137.70 (0.65%)', high: 21313.35, low: 20999.95, open: 21277.30, prevClose: 21275.15 },
    { name: 'NIFTY PSU Bank', last: 6263.40, changeStr: '-32.75 (0.52%)', high: 6371.65, low: 6242.10, open: 6293.50, prevClose: 6296.15 },
    { name: 'NIFTY IT', last: 36886.15, changeStr: '-662.15 (1.76%)', high: 37540.80, low: 36767.25, open: 37376.60, prevClose: 37548.30 },
    { name: 'NIFTY SMALLCAP 250', last: 15104.05, changeStr: '-7.60 (0.05%)', high: 15306.90, low: 15063.00, open: 15174.50, prevClose: 15111.65 },
    { name: 'NIFTY MIDCAP 150', last: 19120.35, changeStr: '-55.05 (0.29%)', high: 19389.60, low: 19039.35, open: 19260.15, prevClose: 19175.40 },
    { name: 'NIFTY Commodities', last: 8468.70, changeStr: '-46.20 (0.54%)', high: 8584.30, low: 8443.45, open: 8532.95, prevClose: 8514.90 },
];
export const mockGlobalIndicesTableData = [
    { name: 'GIFT NIFTY', last: 23637.50, changeStr: '0.00 (0.00%)', high: 23780.50, low: 23490.00, open: 23742.50, prevClose: 23637.50 },
    { name: 'Dow Futures', last: 41500.00, changeStr: '-799.70 (1.89%)', high: 42369.00, low: 41484.00, open: 42290.00, prevClose: 42299.70 },
    { name: 'NASDAQ', last: 17286.00, changeStr: '-629.25 (3.51%)', high: 17936.80, low: 17282.50, open: 17743.10, prevClose: 17915.25 },
    { name: 'Dow', last: 41604.90, changeStr: '-715.81 (1.69%)', high: 42279.15, low: 41551.00, open: 42266.82, prevClose: 42320.71 },
    { name: 'S&P', last: 5614.50, changeStr: '-136.75 (2.38%)', high: 5759.75, low: 5614.25, open: 5753.75, prevClose: 5751.25 },
    { name: 'NIKKEI', last: 37120.33, changeStr: '-679.64 (1.80%)', high: 37359.95, low: 36864.93, open: 37357.52, prevClose: 37799.97 },
    { name: 'HANG SENG', last: 23426.60, changeStr: '-152.21 (0.65%)', high: 23775.30, low: 23254.30, open: 23672.82, prevClose: 23578.81 },
    { name: 'DAX', last: 22461.52, changeStr: '-217.22 (0.96%)', high: 22614.96, low: 22377.91, open: 22558.84, prevClose: 22678.74 },
    { name: 'CAC', last: 7916.08, changeStr: '-74.03 (0.93%)', high: 7975.55, low: 7894.62, open: 7949.23, prevClose: 7990.11 },
    { name: 'KOSPI', last: 2557.98, changeStr: '-49.17 (1.89%)', high: 2592.63, low: 2549.26, open: 2592.63, prevClose: 2607.15 },
    { name: 'FTSE 100', last: 8658.85, changeStr: '-7.27 (0.08%)', high: 8694.19, low: 8636.92, open: 8666.12, prevClose: 8666.12 },
];
export const mockGlobalIndices = [
    { name: 'GIFT NIFTY', value: 23637.50, change: '0.00 (0.00%)', positive: true }, // Assuming 0 change is neutral/positive display
    { name: 'Dow Futures', value: 41500.00, change: '-799.70 (1.89%)', positive: false },
    { name: 'NASDAQ', value: 17286.00, change: '-629.25 (3.51%)', positive: false },

];


// Helper function to determine if change string is positive (optional)
export const isChangePositive = (changeStr) => {
    if (!changeStr) return true; // Default or handle as needed
    return !changeStr.startsWith('-');
};

export const mockMostTraded = [
    { name: 'Aster DM Health', price: 483.50, change: '+30.15 (+6.65%)', positive: true, logo: '?' }, // Add simple logos/icons later?
    { name: 'Eternal', price: 201.70, change: '-4.58 (-2.22%)', positive: false, logo: '?' },
    { name: 'Capri Global', price: 170.21, change: '+5.31 (+3.22%)', positive: true, logo: '?' },
    { name: 'BSE', price: 5479.80, change: '+796.45 (+16.98%)', positive: true, logo: '?' },
];

export const mockProductsTools = [
    { name: 'Terminal', icon: 'terminal' }, // Map these keys to actual icons later
    { name: 'Events', icon: 'calendar' },
    { name: 'Intraday', icon: 'chart' },
    { name: 'IPO', icon: 'rocket' },
    { name: 'Screener', icon: 'filter' },
];

export const mockTopGainers = [
    { name: 'Tata Consumer', price: 1001.90, change: '+28.35 (+2.91%)', positive: true, logo: '?' },
    { name: 'Kotak Mahindra', price: 2171.20, change: '+42.55 (+2.00%)', positive: true, logo: '?' },
    { name: 'Britannia Ind.', price: 4936.90, change: '+95.70 (+1.98%)', positive: true, logo: '?' },
    { name: 'Apollo Hospitals', price: 6616.20, change: '+124.15 (+1.91%)', positive: true, logo: '?' },
];

export const mockEtfsBySomg = [ // Renamed from Groww
    { name: 'Somg Nifty India Defence ETF', price: 63.90, change: '+0.65 (+1.03%)', positive: true },
    { name: 'Somg Nifty India Railways PSU ETF', price: 34.47, change: '-0.11 (-0.32%)', positive: false },
    { name: 'Somg Gold ETF', price: 68.34, change: '+0.93 (+1.06%)', positive: true }, // Used 68.34 based on image calculation
    { name: 'Somg Nifty 200 ETF', price: 10.45, change: '-0.01 (-0.10%)', positive: false },
];

export const mockPortfolio = [
    { id: 's1', type: 'stock', name: 'IRFC', quantity: 100, avgPrice: 150.50, currentPrice: 175.20 },
    { id: 's2', type: 'stock', name: 'SBI', quantity: 50, avgPrice: 750.80, currentPrice: 840.50 },
    { id: 's3', type: 'stock', name: 'Reliance', quantity: 20, avgPrice: 2800.00, currentPrice: 2950.75 },
    { id: 's4', type: 'etf', name: 'NIFTY BEES', quantity: 200, avgPrice: 230.00, currentPrice: 265.10 },
    { id: 's5', type: 'stock', name: 'NHPC', quantity: 150, avgPrice: 95.20, currentPrice: 115.00 },
    { id: 's6', type: 'stock', name: 'IOC', quantity: 80, avgPrice: 160.70, currentPrice: 168.30 },
    { id: 'mf1', type: 'mf', name: 'Quant Small Cap', invested: 50000, currentValue: 58750.00 },
    { id: 'mf2', type: 'mf', name: 'Motilal Midcap', invested: 75000, currentValue: 81200.50 },
];

export const mockStockAllocationData = mockPortfolio
    .filter(item => item.type === 'stock' || item.type === 'etf')
    .map(item => ({
        name: item.name,
        // Calculate current value for stocks/etfs
        value: (Number(item?.quantity) || 0) * (Number(item?.currentPrice) || 0)
    }))
    .filter(item => item.value > 0); // Optional: filter out zero values

// Calculate Mutual Fund Allocation
export const mockMfAllocationData = mockPortfolio
    .filter(item => item.type === 'mf')
    .map(item => ({
        name: item.name.replace(' Fund', ''), // Shorten name for chart label
        value: (Number(item?.currentValue) || 0)
    }))
    .filter(item => item.value > 0);

// Remove the old combined mockAllocationData export if it existed
// export const mockAllocationData = [ ... ]; // DELETE or comment out this line

// --- Keep helper functions and potentially candlestick data ---