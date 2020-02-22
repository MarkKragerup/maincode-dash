import React from 'react';
import './DashboardLink.css';
import { Tooltip } from 'antd';

export default function DashboardLink({tooltip="Go to this dashboard!", tabIndex, className="", children, clickCallback}){
    return (
        <Tooltip title={tooltip}>
            <div className={`theme-card link-card ${className}`} onClick={clickCallback} tabIndex={tabIndex}>
                <div className="left-block">
                    {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                    <h2 className="fas fa-external-link-alt" />
                </div>
                <div className="right-block">
                    {children}
                </div>
            </div>
        </Tooltip>
    );
}