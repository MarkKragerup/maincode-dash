import React, {useEffect} from 'react';
import './Frontpage.css';

import DashboardLink from "../../components/DashboardLink/DashboardLink";

export default function Frontpage(){

    useEffect(() => {
        document.getElementsByClassName('link-card')[0].focus()
    }, []);

    return (
        <div className="link-cards-container">
            <DashboardLink
                tabIndex={1}
                href={"https://monitor.maincode.dk"}
            >
                <h2>Advanced Monitoring</h2>
                <p>xx xxx xxx</p>
            </DashboardLink>
            <a className="theme-card link-card" tabIndex={2}>
                <div className="left-block">
                    <h2 className="fas fa-external-link-alt" />
                </div>
                <div className="right-block">
                    <h2>Advanced Monitoring</h2>
                    <p>Some server info will be coming.</p>
                    <p>test2</p>
                    <p>test3</p>
                </div>
            </a>

            <a className="theme-card link-card" tabIndex={3}>
                <div className="left-block">
                    <h2 className="fas fa-external-link-alt" />
                </div>
                <div className="right-block">
                    <h2>Advanced Monitoring</h2>
                    <p>Some server info will be coming.</p>
                    <p>test2</p>
                    <p>test3</p>
                </div>
            </a>

            <a className="theme-card link-card" tabIndex={4}>
                <div className="left-block">
                    <h2 className="fas fa-external-link-alt" />
                </div>
                <div className="right-block">
                    <h2>Advanced Monitoring</h2>
                    <p>Some server info will be coming.</p>
                    <p>test2</p>
                    <p>test3</p>
                </div>
            </a>

            <a className="theme-card link-card" tabIndex={5}>
                <div className="left-block">
                    <h2 className="fas fa-external-link-alt" />
                </div>
                <div className="right-block">
                    <h2>Advanced Monitoring</h2>
                    <p>Some server info will be coming.</p>
                    <p>test2</p>
                    <p>test3</p>
                </div>
            </a>
        </div>
    );
}