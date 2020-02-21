import React from 'react';
import './DashboardLink.css';
import { Tooltip } from 'antd';

export default function DashboardLink({tabIndex, href, className="", children}){
    return (
        <a className={`theme-card link-card ${className}`} href={href} tabIndex={tabIndex}>
            <div className="left-block">
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h2 className="fas fa-external-link-alt" />
            </div>
            <div className="right-block">
                {children}
            </div>
        </a>
    );
}