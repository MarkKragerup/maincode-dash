import React from 'react';
import './Nestedpage.css';

import Iframe from 'react-iframe';

export default function Nestedpage({url}){
    return (
        <Iframe url={url}
                id="nestedPage"
                className="nestedPage"
        />
    );
}