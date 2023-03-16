import Image from "next/image";
import classes from "./Ibg.module.scss"
import {FC} from "react";
import {IIbg} from "@/UI/Ibg/IIbg";

export const Ibg:FC<IIbg> = ({src, alt, modClass}) => {
    return (
        <div className={`${classes.clIbg} ${modClass}`}>
            <Image src={src} alt={alt} />
        </div>
    );
};
