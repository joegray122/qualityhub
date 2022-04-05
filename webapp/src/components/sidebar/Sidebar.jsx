import React from 'react';
import './sidebar.css';
import { DashboardCustomize } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <DashboardCustomize className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Dashboard
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Testing</h3>
                    <ul className="sidebarList">
                        <Link to="/testing/cypress" className="link">
                            <li className="sidebarListItem">
                                <DashboardCustomize className="sidebarIcon" />
                                Cypress
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            k6
                        </li>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Google Lighthouse
                        </li>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Pytest
                        </li>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Applitools
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Monitoring</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Sentry
                        </li>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            ScoutAPM
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Admin</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Profile
                        </li>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <DashboardCustomize className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <DashboardCustomize className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
