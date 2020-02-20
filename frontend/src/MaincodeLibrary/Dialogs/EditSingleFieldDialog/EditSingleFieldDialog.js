import React, {useState} from 'react';
import './EditSingleFieldDialog.css';
import Dialog from "@material-ui/core/Dialog";
import {TextField} from "@material-ui/core";
import ActionButton from "../../Buttons/ActionButton/ActionButton";

export default function EditSingleFieldDialog({
    open,
    title,
    originalValue,
    setValueCallback,
    closeCallback,
    type="text"
}){
    const [fieldValue, setFieldValue] = useState(originalValue);

    const handleFieldChange = (e) => { setFieldValue(e.target.value) };

    return(
        <Dialog className="customdialogedit-container" aria-labelledby="simple-dialog-title" open={open}>
            <h2 className="customdialog-title maincode-dialog-title">{title}</h2>

            <TextField
                className="edit-single-field-dialog-textfield"
                variant="outlined"
                value={fieldValue}
                type={type}
                onChange={handleFieldChange}
            />

            <div className="custom-dialog-edit-button-container">
                <ActionButton
                    extraClassName='edit-single-field-dialog-button save'
                    iconClass='check'
                    colorVariant='green'
                    tooltipText={'Gem ændring'}
                    tooltipPlacement='left'
                    onClickCallback={() => setValueCallback(fieldValue)}
                >GEM</ActionButton>
                <ActionButton
                    extraClassName='edit-single-field-dialog-button cancel'
                    iconClass='times'
                    colorVariant='blue'
                    tooltipText='Annuller ændring'
                    width={140}
                    onClickCallback={() => closeCallback()}
                >ANNULLER</ActionButton>
            </div>
        </Dialog>
    );
}