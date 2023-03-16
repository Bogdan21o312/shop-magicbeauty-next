import {FC} from "react";
import {ISliderProps} from "@/modules/Slider/ISlider";
import {SwiperSlider, TitlesTop} from "@/modules/Slider/components";
import {main} from "./Slider.module.scss"

export const Slider:FC<ISliderProps> = ({action, recommended, bestsellers, similar, title, link, linkText}) => {
    return (
        <div className={main}>
            <TitlesTop title={title} link={link} linkText={linkText}/>
            <SwiperSlider/>
        </div>
    );
};
