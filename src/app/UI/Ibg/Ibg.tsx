import Image from "next/image";
import classes from "./Ibg.module.scss";
import { FC } from "react";
import { IIbg } from "@/app/UI/Ibg/IIbg";

export const Ibg: FC<IIbg> = ({ src, alt, modClass }) => {

    return (
        <div className={`${classes.clIbg} ${modClass}`}>
            <img src={`http://localhost:9422/${src}`} width={1000} height={1000} alt={alt} />
        </div>
    );
};

