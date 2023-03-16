import {Text} from "@/UI";
import {FC} from "react";
import {ITitlesTop} from "@/modules/Slider/components/TitlesTop/ITitlesTop";
import Link from "next/link";
import {Arrow} from "@/assets/config";
import {main, flex, text, clLink} from "./TitlesTop.module.scss"

export const TitlesTop:FC<ITitlesTop> = ({title, link, linkText}) => {
    return (
        <div className={main}>
            <div className={flex}>
                <div className={text}>
                    <Text as={'h2'} title>{title}</Text>
                </div>
                <Link href={link} className={clLink}>
                    <Text subTitle opacity>
                        {linkText}
                    </Text>
                    <Arrow/>
                </Link>
            </div>
        </div>
    );
};
