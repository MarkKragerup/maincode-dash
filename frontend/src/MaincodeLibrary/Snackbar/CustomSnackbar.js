import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import PropTypes from 'prop-types';

import './CustomSnackbar.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

export default function CustomSnackbar({message, variant, isOpen, onCloseCallback}) {

    function getIcon(){
        switch(variant){
            case 'error':
                return (<ErrorIcon className="snackbar-icon-style"/>);
            case 'success':
                return (<CheckCircleIcon className="snackbar-icon-style"/>);
            case 'warning':
                return (<WarningIcon className="snackbar-icon-style"/>);
            case 'info':
                return (<InfoIcon className="snackbar-icon-style"/>);
            default:
                return null;
        }
    }

    return(
        <Snackbar
            className={"snackbar-style " + variant}
            open={isOpen}
            onClose={onCloseCallback}
            autoHideDuration={3500}
            TransitionComponent={SlideTransition}
            transitionDuration={600}
            message={<span id="message-id"> {getIcon()} <span className="snackbar-text">{message}</span> </span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onCloseCallback}
                >
                    <CloseIcon />
                </IconButton>
            ]}
        />
    );
}

CustomSnackbar.propTypes = {
    message: PropTypes.string,
    variant: PropTypes.oneOf(['success','warning','error','info']).isRequired,
    isOpen: PropTypes.bool,
    onCloseCallback: PropTypes.func
};