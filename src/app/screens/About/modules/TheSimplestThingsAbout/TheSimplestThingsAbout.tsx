import React from 'react';
import classes from "./TheSimplestThingsAbout.module.scss"
import {FullScreen, TextAbout} from "@/app/screens/About/components";
import Image from "next/image";
import ImageSrc from "@/assets/images/about/image-main.jpg";

export const TheSimplestThingsAbout = () => {
    return (
        <FullScreen>
            <div className={classes.screen__body}>
                <TextAbout label={'Multipurpose Minimal Solution'} title={'The simplest things are often the truest…'}/>
                <Image className={classes.screen__image} src={ImageSrc} alt="Image"/>
            </div>
        </FullScreen>
    );
};
