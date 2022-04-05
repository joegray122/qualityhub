import React from 'react';
import './widgetS.css';
import { Visibility } from '@mui/icons-material';

export default function widgetS() {
    return (
        <div className="widgetS">
            <span className="widgetSTitle">Favourites</span>
            <ul className="widgetSList">
                <li className="widgetSListItem">
                    <div className="widgetSUser">
                        <span className="widgetSToolname">Cypress</span>
                        <span className="widgetSToolType">UI E2E</span>
                    </div>
                    <button className="widgetSButton" type="button">
                        <Visibility className="widgetSIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSListItem">
                    <div className="widgetSUser">
                        <span className="widgetSToolname">k6</span>
                        <span className="widgetSToolType">Performance</span>
                    </div>
                    <button className="widgetSButton" type="button">
                        <Visibility className="widgetSIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSListItem">
                    <div className="widgetSUser">
                        <span className="widgetSToolname">Sentry</span>
                        <span className="widgetSToolType">Monitoring</span>
                    </div>
                    <button className="widgetSButton" type="button">
                        <Visibility className="widgetSIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
