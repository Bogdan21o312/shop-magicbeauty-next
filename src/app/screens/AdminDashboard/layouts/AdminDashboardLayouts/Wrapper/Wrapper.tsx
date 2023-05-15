import React, {FC, ReactNode} from 'react';
import classes from "./Wrapper.module.scss"

interface IWrapper {
    children: ReactNode
}

export const Wrapper:FC<IWrapper> = ({children}) => {
    return (
        <div className={classes.main}>
            {children}
        </div>
    );
};
