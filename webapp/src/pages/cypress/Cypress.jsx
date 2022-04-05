import React from 'react';
import './cypress.css';
import FeaturedMetrics from '../../components/featuredMetrics/FeaturedMetrics';
import Chart from '../../components/chart/Chart';
import { cypressPassRate } from '../../data/mockChartData';
import { cypressFeaturedMetrics } from '../../data/mockFeaturedMetrics';

export default function Cypress() {
    return (
        <div className="cypress">
            <FeaturedMetrics data={cypressFeaturedMetrics} />
            <Chart data={cypressPassRate} title="Cypress Pass Rate" grid dataKey="Pass Rate" />
            <div className="cypressWidgets" />
        </div>
    );
}
