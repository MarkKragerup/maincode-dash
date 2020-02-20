import React from "react";
import { Tooltip } from 'antd';
import { iconShorthandMap } from "../../Helpers";
import './ActionButton.css';

export default function ActionButton({
    onClickCallback,
    colorVariant = 'white', // "green", "red", "blue", "white", "grey", "transparent", "dark"
    iconClass = '', // "check", "trash", "times", "pen", "plus" or fontawesome class
    isSquare = false,
    tooltipText = 'OK',
    extraClassName = '',
    tooltipPlacement = 'topLeft',
    width = isSquare ? 40 : 120,
    type = 'button',
    style = null,
    children
}){
    // Construct the base class as "maincode-button ?somecolor ?square"
    let baseClass = 'maincode-button ' + colorVariant + (isSquare ? ' square' : '');

    // Lookup maincode icon shorthand
    iconClass = !!iconShorthandMap.get(iconClass) ? iconShorthandMap.get(iconClass) : iconClass;

    return(
        <Tooltip placement={tooltipPlacement} title={tooltipText} arrowPointAtRight>
            <button className={`${baseClass} ${extraClassName}`}
                    type={type}
                    onClick={onClickCallback}
                    style={{width: width+'px', style}}
            >
                {iconClass.length > 0 && <span className={'icon-span ' + iconClass} />}
                {!!children && <span className='children-span'>{children}</span>}
            </button>
        </Tooltip>
    );
}
