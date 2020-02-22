import React, {useState} from 'react';
import Frontpage from './pages/Frontpage/Frontpage';
import './MaincodeLibrary/Maincode-Styles.css';
import './MaincodeLibrary/CSSThemes/mc-theme-pop-os.css'
import Nestedpage from "./pages/Nestedpage/Nestedpage";
import MenuOverlay from "./components/MenuOverlay/MenuOverlay";

export default function App() {
    const [siteUrl, setSiteUrl] = useState(null);

    console.log(siteUrl);
    return (
        <div className="App">
            <MenuOverlay changeSiteCallback={setSiteUrl}/>

            { !!siteUrl ? <Nestedpage url={siteUrl}/> : <Frontpage changeUrlCallback={setSiteUrl}/> }

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