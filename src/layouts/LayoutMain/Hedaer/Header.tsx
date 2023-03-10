import {header, headerContent} from "./Header.module.scss"
import {HeaderTop} from "@/layouts/LayoutMain/Hedaer/HedaerTop";
import {HeaderCenter} from "@/layouts/LayoutMain/Hedaer/HedaerCenter";
import {HeaderCatalog} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog";


export const Header = () => {
    return (
        <header className={header}>
            <HeaderTop/>
            <div className={headerContent}>
                <HeaderCenter/>
            </div>
            <HeaderCatalog/>
        </header>
    );
};
