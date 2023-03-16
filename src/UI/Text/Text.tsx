import React, {ElementType} from 'react';
import classes from "./Text.module.scss";
import {defaultElementText, ITextProps} from "@/UI/Text/IText";

export const Text = <E extends ElementType = typeof defaultElementText>({as, title, text, children, center, link, subTitle, opacity, light, smallText, titleBig, ...otherProps}: ITextProps<E>) => {
    const TagName = as || defaultElementText;

    const classesMain = classes.clMain
    let classesName = [classesMain]
    const classesBig = classes.clTitleBig
    const classesTitle = classes.clTitle
    const classesSubTitle = classes.clTitleSub
    const classesText = classes.clText
    const classesSmallText = classes.clTextSmall
    const classesLink = classes.clLink
    const classesCenter = classes.clCenter
    const classesOpacity = classes.clOpacity
    const classesLight = classes.clLight

    if (titleBig) {
        classesName.push(classesBig)
    }
    if (title) {
        classesName.push(classesTitle)
    }
    if (subTitle) {
        classesName.push(classesSubTitle)
    }
    if (text) {
        classesName.push(classesText)
    }
    if (smallText) {
        classesName.push(classesSmallText)
    }
    if (link) {
        classesName.push(classesLink)
    }
    if (center) {
        classesName.push(classesCenter)
    }
    if (opacity) {
        classesName.push(classesOpacity)
    }
    if (light) {
        classesName.push(classesLight)
    }

    const allClasses = classesName.join(' ')


    return <TagName className={allClasses} {...otherProps}>{children}</TagName>
};
