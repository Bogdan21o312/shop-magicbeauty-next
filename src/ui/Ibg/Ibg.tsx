import Image from "next/image";
import {clIbg} from "./Ibg.module.scss"
import {FC} from "react";
import {IIbg} from "@/ui/Ibg/IIbg";

export const Ibg:FC<IIbg> = ({src, alt, modClass}) => {
    return (
        <div className={`${clIbg} ${modClass}`}>
            <Image src={src} alt={alt} />
        </div>
    );
};
