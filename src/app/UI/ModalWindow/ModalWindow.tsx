import React, { FC} from 'react';
import classes from './ModalWindow.module.scss';
import { IModalWindow } from '@/app/UI/ModalWindow/IModalWindow';
import { IconPlus } from '@/assets/config';
import { Text } from '@/app/UI';
import {useModalWindow} from "@/app/UI/ModalWindow/useModalWindow";

export const ModalWindow: FC<IModalWindow> = ({ children, title, visible, setVisible, hashUrl }) => {
    const { hash, closeModalWindow, stopPropagation } = useModalWindow(hashUrl, visible, setVisible);

    const isVisible = visible ? classes.active : '';
    const mainClasses = `${classes.modal} ${isVisible} ${hash === hashUrl ? classes.showPopup : ''}`;

    return (
        <div
            className={mainClasses}
            onClick={() => {
                if (hash !== hashUrl) {
                    window.history.pushState({}, document.title, `#${hashUrl}`);
                }
                closeModalWindow();
            }}
        >
            <div className={classes.modalBody} onClick={stopPropagation}>
                <div className={classes.modalTop}>
                    <Text title>{title}</Text>
                    <button onClick={closeModalWindow} className={classes.modalClose}>
                        <IconPlus />
                    </button>
                </div>
                <div className={classes.modalContent}>{children}</div>
            </div>
        </div>
    );
};
