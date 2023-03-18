import {FC} from "react";
import {IPostItem} from "@/app/screens/Home/modules/PostList/components/PostItem/IPostItem";
import classes from "./PostItem.module.scss"
import {Ibg, Text} from "@/app/UI";


export const PostItem:FC<IPostItem> = ({text, title, data, imageSrc, imageAlt}) => {
    return (
        <div className={classes.main}>
            <div className={classes.image}>
                <Ibg src={imageSrc} alt={imageAlt} modClass={classes.ibg}/>
            </div>
            <div className={classes.textBlock}>
                <Text title>{title}</Text>
                <Text text>{text}</Text>
                <div className={classes.data}>
                    <Text text opacity>{data}</Text>
                </div>
            </div>
        </div>
    );
};
