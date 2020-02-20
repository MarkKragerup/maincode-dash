import React from 'react';
import './InfoDialog.css';
import Dialog from "@material-ui/core/Dialog";
import InfoButton from "../../Buttons/InfoButton/InfoButton";

export default function InfoDialog({open, dialogTitle, popOverTitle, openCallback, infoContent, children}){
    return(
        <div>
            <InfoButton onClickCallback={() => openCallback()} title={popOverTitle}>
                {infoContent}
            </InfoButton>
            <Dialog className="info-dialog-container" aria-labelledby="simple-dialog-title" open={open}>
                <h2 className="info-dialog-title custom-dialog-title maincode-dialog-title">{dialogTitle}</h2>
                {children}
            </Dialog>
        </div>
    );
}