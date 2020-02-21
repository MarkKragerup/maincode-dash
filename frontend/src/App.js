import React from 'react';
import Frontpage from './pages/Frontpage/Frontpage';
import './MaincodeLibrary/Maincode-Styles.css';
import './MaincodeLibrary/CSSThemes/mc-theme-pop-os.css'

export default function App() {
    return (
        <div className="App">
            <Frontpage/>

            <h2 style={{display: 'block'}}>Still needs:</h2>
            <ul>
                <li>Go to cloud.com link</li>
                <li>SSH copy button</li>
                <li>View on github link</li>
                <li>Complete rework for in-app running</li>
                <li>Application version by electron</li>
            </ul>
        </div>
    );
}