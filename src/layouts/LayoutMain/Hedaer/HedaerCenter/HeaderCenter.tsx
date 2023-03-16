import classes from "./HedaerCenter.module.scss"
import Link from "next/link";
import {Cart, Location, Love, Search} from "@/assets/config";

export const HeaderCenter = () => {
    return (
        <div className={classes.main}>
            <div className={classes.logo}>
                LOGO
            </div>
            <div className={classes.search}>
                <form action="#" className={classes.searchForm}>
                    <button className={classes.searchButton}>
                        <Search/>
                    </button>
                    <input autoComplete="off" type="text" placeholder="Search" className={classes.searchInput}/>
                </form>
            </div>
            <div className={classes.actions}>
                <Link href='#' className={classes.actionsLocation}>
                    <div className={classes.actionsLocationIcon}>
                        <Location/>
                    </div>
                    <div className={classes.actionsLocationText}>Тернопіль</div>
                </Link>
                <div className={classes.actionsPhones}>
                    <a href="tel:0677871456" className={classes.actionsPhone}>0 (67) 787 14 56</a>
                    <button type="button" className={classes.actionsCallback}>Замовити дзвінок</button>
                </div>
                <div className={classes.actionsLove}>
                    <Love/>
                    <span>0</span>
                </div>
            </div>
            <div className={classes.cart}>
                <div className={classes.cartIcon}>
                    <Cart/>
                    <span>0</span>
                </div>
                <div className={classes.cartBody}>
                    <div className={classes.cartBodySum}>0 грн.</div>
                    <div className={classes.cartBodyLink}>Оформити замовлення</div>
                </div>
            </div>
        </div>
    );
};
