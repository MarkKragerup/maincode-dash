import React from "react";
import { Popover } from 'antd';
import './InfoButton.css';

export default function InfoButton({
    title = 'Information',
    extraClassName = '',
    popoverPlacement = 'top',
    style = null,
    onClickCallback=() => console.log("No information on click here."),
    children
}){
    let baseClass = 'maincode-info-button-wrapper';
    return(
        <span className={`${baseClass} ${extraClassName}`}>
            <Popover placement={popoverPlacement} content={children} title={title} arrowPointAtRight overlayClassName='info-button-overlay'>
                <button className='maincode-button info-button'
                        type='button'
                        style={style}
                        onClick={() => onClickCallback()}
                >
                    <span className='fas fa-question'/>
                </button>
            </Popover>
        </span>
    );
}