import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import './PenEditButton.css';

export default function PenEditButton({onClickCallback, tooltipText='Rediger', colorVariant='white'}){
    return(
            <ActionButton
                extraClassName='pen-edit-button'
                iconClass='pen'
                colorVariant={colorVariant}
                tooltipText={tooltipText}
                isSquare
                tooltipPlacement='topLeft'
                onClickCallback={onClickCallback}
                width={25}
            />
    );
}