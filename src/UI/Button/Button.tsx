import {main, clSecondary, clPrimary, clWidthHundredPercent} from "./Button.module.scss"
import {ElementType} from "react";
import {defaultElementButton, IButtonProps} from "@/UI/Button/IButton";


export const Button = <E extends ElementType = typeof defaultElementButton>({as, text, icon, primary, secondary, widthHundredPercent, ...otherProps} :IButtonProps<E>) => {
    const TagName = as || defaultElementButton;

    const classesMain = main
    let classesName = [classesMain]
    const classesPrimary = clPrimary
    const classesSecondary = clSecondary
    const classesWidthHundredPercent = clWidthHundredPercent

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
