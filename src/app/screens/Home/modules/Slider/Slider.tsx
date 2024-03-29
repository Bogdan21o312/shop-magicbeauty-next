import {FC} from "react";
import {ISliderProps} from "@/app/screens/Home/modules/Slider/ISlider";
import {SwiperSlider, TitlesTop} from "@/app/screens/Home/modules/Slider/components";
import classes from "./Slider.module.scss"

export const Slider:FC<ISliderProps> = ({action, recommended, bestsellers, similar, title, link, linkText}) => {
    return (
        <div className={classes.main}>
            <TitlesTop title={title} link={link} linkText={linkText}/>
            <SwiperSlider/>
        </div>
    );
};
