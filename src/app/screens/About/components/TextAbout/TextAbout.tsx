import React, {FC} from 'react';
import classes from "./TextAbout.module.scss"

interface TextAboutProps {
    children?: never
    label: string
    title: string
    modClasses?: object
    lite?: boolean
}

export const TextAbout:FC<TextAboutProps> = ({modClasses, label, title, lite}) => {

    const liteClasses = lite ? classes.lite : ''
    const mainClasses = `${classes.TextAbout} ${liteClasses} ${modClasses}`

    return (
        <div className={mainClasses}>
            <div className={classes.TextAboutLabel}>{label}</div>
            <div className={classes.TextAboutTitle}>
                {title}
            </div>
        </div>
    );
};
