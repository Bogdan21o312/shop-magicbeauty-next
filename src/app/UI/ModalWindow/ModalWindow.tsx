import React, {FC, useEffect, MouseEvent} from 'react';
import classes from "./ModalWindow.module.scss"
import {IModalWindow} from "@/app/UI/ModalWindow/IModalWindow";
import {Text} from "@/app/UI";
import {IconPlus} from "@/assets/config";

export const ModalWindow:FC<IModalWindow> = ({children, visible, setVisible, title}) => {

    const isVisible = visible? classes.active : ''

    const mainClasses = `${classes.modal} ${isVisible}`

    const closeModalWindow = () => {
        setVisible(false)
    }

    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {

        if (visible) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }

        return () => {
            document.body.classList.remove('lock');
        }

    }, [visible]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {

            if (event.key === 'Escape') {
                closeModalWindow();
            }

        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);

    return (
        <div className={mainClasses} onClick={closeModalWindow}>
            <div className={classes.modalBody} onClick={stopPropagation}>
                <div className={classes.modalTop}>
                    <Text title>{title}</Text>
                    <button onClick={closeModalWindow} className={classes.modalClose}><IconPlus/></button>
                </div>
                <div className={classes.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};
