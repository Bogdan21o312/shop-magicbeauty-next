import {main, clSecondary, clPrimary} from "./Button.module.scss"
import {ElementType} from "react";
import {defaultElementButton, IButtonProps} from "@/ui/Button/IButton";


export const Button = <E extends ElementType = typeof defaultElementButton>({as, text, icon, primary, secondary, ...otherProps} :IButtonProps<E>) => {
    const TagName = as || defaultElementButton;

    const classesMain = main
    let classesName = [classesMain]
    const classesPrimary = clPrimary
    const classesSecondary = clSecondary

    if (primary) {
        classesName.push(classesPrimary)
    }
    if (secondary) {
        classesName.push(classesSecondary)
    }


    return <TagName className={classesName.join(' ')} {...otherProps}>{text} {icon}</TagName>
};
