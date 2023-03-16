import classes from "./Button.module.scss"
import {ElementType} from "react";
import {defaultElementButton, IButtonProps} from "@/UI/Button/IButton";


export const Button = <E extends ElementType = typeof defaultElementButton>({as, text, icon, primary, secondary, widthHundredPercent, ...otherProps} :IButtonProps<E>) => {
    const TagName = as || defaultElementButton;

    const classesMain = classes.main
    let classesName = [classesMain]
    const classesPrimary = classes.clPrimary
    const classesSecondary = classes.clSecondary
    const classesWidthHundredPercent = classes.clWidthHundredPercent

    if (primary) {
        classesName.push(classesPrimary)
    }
    if (secondary) {
        classesName.push(classesSecondary)
    }

    if (widthHundredPercent) {
        classesName.push(classesWidthHundredPercent)
    }


    return <TagName className={classesName.join(' ')} {...otherProps}>{text} {icon}</TagName>
};
