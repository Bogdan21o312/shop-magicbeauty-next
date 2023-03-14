import React, {ElementType} from 'react';
import {clMain, clTitleBig, clTitle, clTitleSub, clText, clTextSmall, clLink, clCenter, clOpacity, clLight} from "./Text.module.scss";
import {defaultElementText, ITextProps} from "@/ui/Text/IText";

export const Text = <E extends ElementType = typeof defaultElementText>({as, title, text, children, center, link, subTitle, opacity, light, smallText, titleBig, ...otherProps}: ITextProps<E>) => {
    const TagName = as || defaultElementText;

    const classesMain = clMain
    let classesName = [classesMain]
    const classesBig = clTitleBig
    const classesTitle = clTitle
    const classesSubTitle = clTitleSub
    const classesText = clText
    const classesSmallText = clTextSmall
    const classesLink = clLink
    const classesCenter = clCenter
    const classesOpacity = clOpacity
    const classesLight = clLight

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
