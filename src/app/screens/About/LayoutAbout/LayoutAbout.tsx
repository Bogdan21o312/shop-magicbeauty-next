import React, {FC, ReactNode} from 'react';
import classes from "./LayoutAbout.module.scss"

interface AboutProps {
    children: ReactNode
}

export const LayoutAbout:FC<AboutProps> = ({children}) => {
    return (
        <main className={classes.page}>
            {children}
        </main>
    );
};
