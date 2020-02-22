import React, {useEffect} from 'react';
import './Frontpage.css';

import DashboardLink from "../../components/DashboardLink/DashboardLink";

export default function Frontpage({changeUrlCallback}){

    useEffect(() => {
        document.getElementsByClassName('link-card')[0].focus()
    }, []);

    return (
        <div className="link-cards-container">
            <DashboardLink
                tabIndex={1}
                clickCallback={() => changeUrlCallback('https://monitor.maincode.dk')}
            >
                <h2>Advanced Monitoring</h2>
                <p>Using Linux-Dash to gain detailed formance insight such as ressource usage of processes and docker containers.</p>
            </DashboardLink>

            <DashboardLink
                tabIndex={2}
                clickCallback={() => changeUrlCallback('https://portrainer.maincode.dk')}
            >
                <h2>Docker Management</h2>
                <p>Using Portrainer to manage docker containers and images, to start, stop and import images from docker-hub.</p>
            </DashboardLink>

            <DashboardLink
                tabIndex={3}
                clickCallback={() => changeUrlCallback('https://cockpit.dash.maincode.dk')}
            >
                <h2>Logs and Jobs</h2>
                <p>Cockpit dashboard for managing timed jobs (commands), and viewing advanced logs.</p>
            </DashboardLink>

            <DashboardLink
                tabIndex={4}
                clickCallback={() => changeUrlCallback('https://phpmyadmin.maincode.dk/phpmyadmin/')}
            >
                <h2>MySQL Management</h2>
                <p>Manage MySQL through phpMyAdmin - export backups, visit all instances.</p>
            </DashboardLink>

            <DashboardLink
                tabIndex={5}
                clickCallback={() => changeUrlCallback('https://monitor.maincode.dk')}
            >
                <h2>Custom Actions</h2>
                <p>Run predefined scripts and actions.</p>
            </DashboardLink>
        </div>
    );
}