import React, {FC, ReactNode} from 'react';
import classes from "./FullScreen.module.scss"

interface FullScreenProps {
    children: ReactNode
}

export const FullScreen:FC<FullScreenProps> = ({children}) => {
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                {children}
            </div>
        </section>
    );
};
