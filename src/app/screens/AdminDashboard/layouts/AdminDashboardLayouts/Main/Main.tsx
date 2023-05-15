import React, {FC, ReactNode} from 'react';

import classes from "./Main.module.scss"

interface IMain {
    children: ReactNode
}

export const Main:FC<IMain> = ({children}) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    );
};
