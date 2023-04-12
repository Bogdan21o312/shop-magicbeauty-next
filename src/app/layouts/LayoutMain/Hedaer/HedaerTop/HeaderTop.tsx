import classes from "./HedaerTop.module.scss"
import Link from "next/link";
import {Button} from "@/app/UI";
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";
import {
    ABOUT_PAGE,
    CATEGORIES_PAGE,
    CONTACT_PAGE,
    NEWS_PAGE,
    PAYMENT_AND_DELIVERY_PAGE
} from "@/app/routes/mainPageRoutes";
import {Login} from "@/app/layouts/LayoutMain/Hedaer/Components/Login";

export const HeaderTop = () => {

    const data = [
        {text: "Про нас", href: ABOUT_PAGE},
        {text: "Оплата і доставка", href: PAYMENT_AND_DELIVERY_PAGE},
        {text: "Новини", href: NEWS_PAGE},
        {text: "Контактна інформація", href: CONTACT_PAGE},
        {text: "Категорії", href: CATEGORIES_PAGE}
    ]

    return (
        <div className={classes.top}>
            <div className={classes.content}>
                <ul className={classes.list}>
                    {data.map(item =>
                        <li key={item.text} className={classes.item}>
                            <CustomLink className={classes.link} href={item.href}>{item.text}</CustomLink>
                        </li>
                    )}
                </ul>
            </div>
            <div className={classes.success}>
                <Login/>
                <button className={classes.text}>Реєстрація</button>
            </div>
        </div>
    );
};
