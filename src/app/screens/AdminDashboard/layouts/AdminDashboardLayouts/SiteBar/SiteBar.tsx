import React from 'react';
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";
import classes from "./SiteBar.module.scss"
import {useRouter} from "next/router";
import {ADMIN_DASHBOARD_PAGE, ADMIN_DASHBOARD_USERS_PAGE, ADMIN_DASHBOARD_POSTS_PAGE} from "@/app/routes";

export const SiteBar = () => {
    const {pathname} = useRouter();

    const classesLink = classes.link

    return (
        <div>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <CustomLink
                            className={`${classesLink} ${pathname === ADMIN_DASHBOARD_PAGE ? classes._active : ''}`}
                            href={ADMIN_DASHBOARD_PAGE}>Адмін панель</CustomLink>
                    </li>
                    <li className={classes.item}>
                        <CustomLink
                            className={`${classesLink} ${pathname === ADMIN_DASHBOARD_USERS_PAGE ? classes._active : ''}`}
                            href={ADMIN_DASHBOARD_USERS_PAGE}>Користувачі</CustomLink>
                    </li>
                    <li className={classes.item}>
                        <CustomLink
                            className={`${classesLink} ${pathname === ADMIN_DASHBOARD_POSTS_PAGE ? classes._active : ''}`}
                            href={ADMIN_DASHBOARD_POSTS_PAGE}>Пости</CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
