import {main} from "./Section.module.scss"
import {FC, ReactNode} from "react";

interface SectionProps {
    children: ReactNode
}

export const Section:FC<SectionProps> = ({children}) => {
    return (
        <section className={main}>
            {children}
        </section>
    );
};
