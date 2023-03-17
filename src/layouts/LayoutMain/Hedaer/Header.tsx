import classes from "./Header.module.scss"
import {HeaderTop} from "@/layouts/LayoutMain/Hedaer/HedaerTop";
import {HeaderCenter} from "@/layouts/LayoutMain/Hedaer/HedaerCenter";
import {HeaderCatalog} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog";


export const Header = () => {
    return (
        <header className={classes.header}>
            <HeaderTop/>
            <div className={classes.headerContent}>
                <HeaderCenter/>
            </div>
            <HeaderCatalog/>
        </header>
    );
};
