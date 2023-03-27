import {Text} from "@/app/UI";
import {FC} from "react";
import {ITitlesTop} from "@/app/screens/Home/modules/Slider/components/TitlesTop/ITitlesTop";
import Link from "next/link";
import {IconArrow} from "@/assets/config";
import classes from "./TitlesTop.module.scss"
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";

export const TitlesTop:FC<ITitlesTop> = ({title, link, linkText}) => {
    return (
        <div className={classes.main}>
            <div className={classes.flex}>
                <div className={classes.text}>
                    <Text as={'h2'} title>{title}</Text>
                </div>
                <CustomLink href={link} className={classes.clLink}>
                    <Text subTitle opacity>
                        {linkText}
                    </Text>
                    <IconArrow/>
                </CustomLink>
            </div>
        </div>
    );
};
