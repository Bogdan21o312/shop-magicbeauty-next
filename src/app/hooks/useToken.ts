import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const useToken = () => {

    const router = useRouter()

    const [hasToken, setHasToken] = useState(false);

    const localStorageModule = {
        getItem: (key: string) => {
            return localStorage.getItem(key);
        },
        setItem: (key: string, value: string) => {
            localStorage.setItem(key, value);
        },
        removeItem: (key: string) => {
            localStorage.removeItem(key);
        },
    };

    useEffect(() => {
        const checkLocalStorage = () => {
            const token = localStorageModule.getItem('token');
            const hasToken = typeof token !== 'undefined' && token !== null;

            setHasToken(hasToken);
        };

        checkLocalStorage();
    }, []);

    const handleLogout = () => {
        localStorageModule.removeItem('token');
        setHasToken(false);
        router.reload()
    };

    return { hasToken, handleLogout };
};
