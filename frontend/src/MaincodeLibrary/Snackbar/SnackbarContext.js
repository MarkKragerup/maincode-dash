import React, {createContext, useState} from 'react';

const SnackbarContext = createContext([{}, {}]);

const SnackbarProvider = (props) => {
    const [snackbarState, setSnackbarState] = useState({message: "", variant: "info", isOpen: false});

    function triggerSnackbar(message, variant) {
        setSnackbarState({message, variant, isOpen: true});
    }

    function hideSnackbar() {
        let snackBarState = {...snackbarState};
        snackBarState.isOpen = false;
        setSnackbarState(snackBarState);
    }

    const snackbarAPI = {
        trigger: triggerSnackbar,
        hide: hideSnackbar
    };

    return (
        <SnackbarContext.Provider value = {[snackbarAPI, snackbarState]}>
            {props.children}
        </SnackbarContext.Provider>
    );
};
export {SnackbarContext, SnackbarProvider};
