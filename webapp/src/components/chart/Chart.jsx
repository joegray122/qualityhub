import React from 'react';
import PropTypes from 'prop-types';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    Chart.propTypes = {
        title: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        dataKey: PropTypes.number.isRequired,
        grid: PropTypes.string.isRequired,
    };
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#7be0a3" />
                    <Line type="monotone" dataKey={dataKey} stroke="#7be0a3" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
