import React from 'react';
import PropTypes from 'prop-types';
import './featuredMetrics.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedMetrics({ data }) {
    FeaturedMetrics.propTypes = {
        data: PropTypes.objectOf(PropTypes.shape()).isRequired,
    };
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">{data[0].metric}</span>
                <div className="featuredMetricContainer">
                    <span className="featuredPassRate">{data[0].value}</span>
                    <span className="featuredPassRateDiff">
                        {data[0].delta} <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredPassRateDiffLabel">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">{data[1].metric}</span>
                <div className="featuredMetricContainer">
                    <span className="featuredPassRate">{data[1].value}</span>
                    <span className="featuredPassRateDiff">
                        {data[1].delta} <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredPassRateDiffLabel">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">{data[2].metric}</span>
                <div className="featuredMetricContainer">
                    <span className="featuredPassRate">{data[2].value}</span>
                    <span className="featuredPassRateDiff">
                        {data[2].delta} <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredPassRateDiffLabel">Compared to last month</span>
            </div>
        </div>
    );
}
