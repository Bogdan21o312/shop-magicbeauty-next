import classes from "./HeaderCenterDesktop.module.scss"
import Link from "next/link";
import {IconLocation, IconLove, IconSearch} from "@/assets/config";
import {Actions, Cart, Logo, Search} from "@/app/layouts/LayoutMain/Hedaer/Components";
export const HeaderCenterDesktop = () => {
    return (
        <div className={classes.main}>
            <Logo/>
            <Search/>
            <Actions/>
            <Cart/>
        </div>
    );
};
