import {useEffect, useState} from "react";

export const useToken = () => {
    const [hasToken, setHasToken] = useState(false);

    const localStorageModule = {
        getItem: (key: string) => {
            return localStorage.getItem(key);
        },
        setItem: (key: string, value: string) => {
            localStorage.setItem(key, value);
        },
    };

    useEffect(() => {
        const checkLocalStorage = () => {
            // Використання методів з localStorageModule
            const token = localStorageModule.getItem('token');
            const hasToken = typeof token !== 'undefined' && token !== null;

            setHasToken(hasToken);
        };

        checkLocalStorage();
    }, []);

    return hasToken;
};
