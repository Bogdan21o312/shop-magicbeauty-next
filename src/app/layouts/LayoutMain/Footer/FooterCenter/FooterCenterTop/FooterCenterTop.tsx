import classes from "./FooterCenterTop.module.scss"
import {data} from "./FooterCenterTopItems"
import Link from "next/link";

export const FooterCenterTop = () => {
    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <div className={classes.columns}>
                    {data.map(column =>
                        <div key={column.title} className={classes.column}>
                            <Link href={'#'} className={classes.title}>{column.title}</Link>
                            <ul className={classes.list}>
                                {column.links.map(item =>
                                    <li className={classes.item}>
                                        <Link className={classes.link} href={item.url}>{item.text}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
