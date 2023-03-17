import classes from "./HedaerTop.module.scss"
import Link from "next/link";
import {Button} from "@/UI";

export const HeaderTop = () => {

    const data = [
        {text: "Про нас"},
        {text: "Оплата і доставка"},
        {text: "Новини"},
        {text: "Контактна інформація"}
    ]

    return (
        <div className={classes.top}>
            <div className={classes.content}>
                <ul className={classes.list}>
                    {data.map(item =>
                        <li key={item.text} className={classes.item}>
                            <Link href={"#"}>{item.text}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className={classes.success}>
                <button className={classes.text}>Вхід</button>
                <button className={classes.text}>Реєстрація</button>
            </div>
        </div>
    );
};
