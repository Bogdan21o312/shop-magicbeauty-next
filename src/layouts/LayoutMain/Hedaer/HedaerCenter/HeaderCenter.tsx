import {
    main,
    logo,
    cart,
    cartIcon,
    cartBody,
    cartBodySum,
    cartBodyLink,
    search,
    searchButton,
    searchForm,
    searchInput,
    actionsPhone,
    actions,
    actionsCallback,
    actionsLocationIcon,
    actionsLocationText,
    actionsLocation,
    actionsLove,
    actionsPhones
} from "./HedaerCenter.module.scss"
import Link from "next/link";
import {Cart, Location, Love, Search} from "@/assets/config";

export const HeaderCenter = () => {
    return (
        <div className={main}>
            <div className={logo}>
                LOGO
            </div>
            <div className={search}>
                <form action="#" className={searchForm}>
                    <button className={searchButton}>
                        <Search/>
                    </button>
                    <input autoComplete="off" type="text" placeholder="Search" className={searchInput}/>
                </form>
            </div>
            <div className={actions}>
                <Link href='#' className={actionsLocation}>
                    <div className={actionsLocationIcon}>
                        <Location/>
                    </div>
                    <div className={actionsLocationText}>Тернопіль</div>
                </Link>
                <div className={actionsPhones}>
                    <a href="tel:0677871456" className={actionsPhone}>0 (67) 787 14 56</a>
                    <button type="button" className={actionsCallback}>Замовити дзвінок</button>
                </div>
                <div className={actionsLove}>
                    <Love/>
                    <span>0</span>
                </div>
            </div>
            <div className={cart}>
                <div className={cartIcon}>
                    <Cart/>
                    <span>0</span>
                </div>
                <div className={cartBody}>
                    <div className={cartBodySum}>0 грн.</div>
                    <div className={cartBodyLink}>Оформити замовлення</div>
                </div>
            </div>
        </div>
    );
};
