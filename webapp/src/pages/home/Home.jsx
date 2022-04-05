import React from 'react';
import './home.css';
import FeaturedMetrics from '../../components/featuredMetrics/FeaturedMetrics';
import Chart from '../../components/chart/Chart';
import { qualityRating } from '../../data/mockChartData';
import { homeFeaturedMetrics } from '../../data/mockFeaturedMetrics';
import WidgetL from '../../components/widgetL/WidgetL';
import WidgetS from '../../components/widgetS/WidgetS';

export default function Home() {
    return (
        <div className="home">
            <Chart data={qualityRating} title="Quality Rating" grid dataKey="Rating" />
            <FeaturedMetrics data={homeFeaturedMetrics} />
            <div className="homeWidgets">
                <WidgetS />
                <WidgetL />
            </div>
        </div>
    );
}
