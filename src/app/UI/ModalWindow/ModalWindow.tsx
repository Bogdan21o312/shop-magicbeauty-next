import React, {FC,ReactNode} from 'react';
import classes from "./ModalWindow.module.scss"
import {IModalWindow} from "@/app/UI/ModalWindow/IModalWindow";

export const ModalWindow:FC<IModalWindow> = ({children, visible, setVisible}) => {

    const isVisible = visible? classes.active : ''
    const mainClasses = `${classes.modal} ${isVisible}`

    const closeModalWindow = () => {
        setVisible(false)
    }

    const stopPropagation = (e: any) => {
        e.stopPropagation()
    }
    return (
        <div className={mainClasses} onClick={closeModalWindow}>
            <div className={classes.modalContent} onClick={stopPropagation}>
                {children}
            </div>
        </div>
    );
};
