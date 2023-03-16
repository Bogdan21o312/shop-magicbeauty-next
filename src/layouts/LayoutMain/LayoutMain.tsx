import {FC, ReactNode} from "react";
import {Header} from "@/layouts/LayoutMain/Hedaer";
import {Footer} from "@/layouts/LayoutMain/Footer";
import {Section} from "@/layouts/LayoutMain/Section";


interface LayoutMainProps {
    children: ReactNode
}

export const LayoutMain: FC<LayoutMainProps> = ({children}) => {
    return (
        <>
            <Header/>
            <Section>
                {children}
            </Section>
            <Footer/>
        </>
    );
};
