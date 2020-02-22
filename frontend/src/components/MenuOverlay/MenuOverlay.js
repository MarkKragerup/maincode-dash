import React from 'react';
import './MenuOverlay.css';

export default function MenuOverlay({changeSiteCallback}){
    return (
        <div className="menu-overlay-container">
            <button className='menu-overlay' onClick={() => changeSiteCallback('https://dash.maincode.dk')}>
                Testing overlay button
            </button>
        </div>
    );
}