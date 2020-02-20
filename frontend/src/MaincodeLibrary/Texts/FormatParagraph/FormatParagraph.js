import React from "react";
import './FormatParagraph.css';
import {formatNumber} from '../../Helpers.js';

export default function FormatParagraph({type = 'number', decimals=2 ,unitText = '', extraClassName = '', unitClassName = '', danishDecimal = true, children}){

    // The text to be displayed
    let text = children;

    // Corrects number of shown decimals for number
    text = (type === 'number' && decimals) ? text.toFixed(decimals) : text;

    // Adds danish comma formats for number
    text = (type === 'number' && danishDecimal) ? formatNumber(text) : text;

    return(
        <p className={extraClassName}>
            {text}
            <span className={`format-p-suffix "${unitClassName}"`}>{unitText}</span>
        </p>
    );
}