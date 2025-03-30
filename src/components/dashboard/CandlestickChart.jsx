/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import * as LightweightCharts from 'lightweight-charts';
import { mockCandlestickData, mockVolumeData } from '../../data/mockDashboardData';

function CandlestickChart() {
    const chartContainerRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useLayoutEffect(() => {
        if (!chartContainerRef.current) return;


        const chart = LightweightCharts.createChart(chartContainerRef.current, {

            width: chartContainerRef.current.clientWidth,
            height: 300,
            layout: { background: { color: '#1E1E1E' }, textColor: '#A0A0A0' },
            grid: { vertLines: { color: '#3A3A3A' }, horzLines: { color: '#3A3A3A' } },
            timeScale: { timeVisible: true, secondsVisible: false },
        });
        chartInstanceRef.current = chart;
        console.log("CandlestickChart: Chart object created:", chart);

        if (typeof chart.addCandlestickSeries !== 'function') {
             console.error("CandlestickChart Error (Namespace Import): chart.addCandlestickSeries is NOT a function!", chart);
             return; 
        }


        console.log("CandlestickChart: Adding Candlestick series...");
        const candlestickSeries = chart.addCandlestickSeries({ 
            upColor: '#2CB67D', downColor: '#E45858', borderVisible: false,
            wickUpColor: '#2CB67D', wickDownColor: '#E45858',
        });
        candlestickSeries.setData(mockCandlestickData);
        console.log("CandlestickChart: Candlestick data set.");

         console.log("CandlestickChart: Adding Volume series...");
        const volumeSeries = chart.addHistogramSeries({
            color: '#3A3A3A', priceFormat: { type: 'volume' },
            priceScaleId: '', scaleMargins: { top: 0.8, bottom: 0 },
        });
        volumeSeries.setData(mockVolumeData);
        console.log("CandlestickChart: Volume data set.");

        chart.timeScale().fitContent();
        console.log("CandlestickChart: fitContent called.");


        const handleResize = () => { /* ... resize logic ... */ };
        window.addEventListener('resize', handleResize);

        return () => { /* ... cleanup logic ... */ };

    }, []);

    return <div ref={chartContainerRef} className="w-full h-[300px] border border-border-color/30 rounded"></div>;
}

export default CandlestickChart;