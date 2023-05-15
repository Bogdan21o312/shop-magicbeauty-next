import React, {FC, ReactNode, useEffect} from 'react';
import {useRouter} from "next/router";
import {HOME_PAGE, LOGIN_POPUP} from "@/app/routes";

interface IPrivateRoute {
    children: ReactNode
}

export const PrivateRoute:FC<IPrivateRoute> = ({children}) => {
    const router = useRouter();

    // Виконати перевірку доступу при кожному рендері
    useEffect(() => {
        // Перевірка, чи користувач має доступ до сторінки, наприклад, перевірка токена аутентифікації
        const isLoggedIn = !!localStorage.getItem('token');
        if (!isLoggedIn) {
            // Якщо користувач не має доступу, перенаправити на сторінку входу
            router.push(`${HOME_PAGE}#${LOGIN_POPUP}`);
        }
    }, []);

    // Повернути дочірні компоненти, якщо користувач має доступ
    return <>{children}</>;
};
