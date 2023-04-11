import classes from "./Loader.module.scss"
import {useEffect} from "react";

export const Loader = () => {
    return (
        <div className={classes.spinner}>
            <div className={classes.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
