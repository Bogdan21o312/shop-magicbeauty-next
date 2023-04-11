import React from 'react';
import {Button, Timer} from "@/app/UI";
import classes from "./TimerMainContent.module.scss"

export const TimerMainContent = () => {
    return (
        <div className={classes.main}>
            <div className={classes.title}>BIRTHDAY SALE 77%</div>
            <div className={classes.flex}>
                <Timer/>
                <Button border text={'Отримати Промокод!'}/>
            </div>
        </div>
    );
};
