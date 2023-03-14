import {ComponentProps, ElementType, ReactNode} from "react";

type ITextSmallTextProps<E extends ElementType = ElementType> = {
    subTitle?: never
    titleBig?: never
    title?: never
    text?: never
    smallText?: boolean
    link?: never
    center?: boolean
    opacity?: boolean
    light?: boolean
    as?: E;
};

type ITextBigTitleProps<E extends ElementType = ElementType> = {
    subTitle?: never
    titleBig?: boolean
    title?: never
    text?: never
    smallText?: never
    link?: never
    center?: boolean
    opacity?: boolean
    light?: boolean
    as?: E;
};

type ITextTitleProps<E extends ElementType = ElementType> = {
    subTitle?: boolean
    titleBig?: never
    title?: never
    text?: never
    smallText?: never
    link?: never
    center?: boolean
    opacity?: boolean
    light?: boolean
    as?: E;
};

type ITextSubTitleProps<E extends ElementType = ElementType> = {
    subTitle?: never
    titleBig?: never
    title?: boolean
    text?: never
    smallText?: never
    link?: never
    center?: boolean
    opacity?: boolean
    light?: boolean
    as?: E;
};

type ITextTextProps<E extends ElementType = ElementType> = {
    subTitle?: never
    titleBig?: never
    title?: never
    text?: boolean
    smallText?: never
    link?: never
    center?: boolean
    opacity?: boolean
    light?: boolean
    as?: E;
};

type ITextLinkProps<E extends ElementType = ElementType> = {
    subTitle?: never
    titleBig?: never
    title?: never
    text?: never
    smallText?: never
    link?: boolean
    center?: boolean
    opacity?: boolean
    light?: boolean
    as?: E;
};

type ITextOwnProps<E extends ElementType = ElementType> =
    ITextTitleProps
    | ITextTextProps
    | ITextLinkProps
    | ITextSubTitleProps
    | ITextSmallTextProps
    | ITextBigTitleProps & {
    as?: E;
    children: ReactNode;
};


export const defaultElementText = "div";
export type ITextProps<E extends ElementType> = ITextOwnProps<E> &
    Omit<ComponentProps<E>, keyof ITextOwnProps>;
