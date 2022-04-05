import React from 'react';
import './header.css';
import { Language, NotificationsNone, Person, Settings } from '@mui/icons-material';

export default function Header() {
    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <span className="logo">QualityHub</span>
                </div>
                <div className="headerRight">
                    <div className="headerIconContainer">
                        <NotificationsNone />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerIconContainer">
                        <Language />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerIconContainer">
                        <Settings />
                    </div>
                    <div className="headerIconContainer">
                        <Person />
                    </div>
                </div>
            </div>
        </div>
    );
}
