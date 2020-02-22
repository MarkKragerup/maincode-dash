import React, {useState} from 'react';
import './MenuOverlay.css';

export default function MenuOverlay({changeSiteCallback}){

    const [showMenu, setShowMenu] = useState(false);
    return (

        <div className='menu-overlay-container'>

            <button
                className='menu-overlay'
                onClick={() => setShowMenu(!showMenu)}
            >
                {
                    showMenu ? <span>cross</span> : <span>burger</span>
                }
            </button>
            {
                showMenu && (
                    <div className="menu-foldout-space">
                        <p>foldout space!</p>
                    </div>
                )
            }

        </div>
    );
}