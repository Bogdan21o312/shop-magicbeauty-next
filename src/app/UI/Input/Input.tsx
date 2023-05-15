import classes from "./Input.module.scss"
import {FC, InputHTMLAttributes} from "react";
import {IInput} from "@/app/UI/Input/IInput";

export const Input:FC<IInput & InputHTMLAttributes<HTMLInputElement>> = ({placeholder, type, ...otherProps}) => {
    return (
        <div className={classes.inputWrapper}>
            <input type={type? type : "text"} className={classes.formControl} placeholder={placeholder} {...otherProps}/>
            <label className={classes.controlLabel}>{placeholder}</label>
        </div>
    );
};
