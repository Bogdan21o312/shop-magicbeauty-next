import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const usePreloader = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);
        };

        const handleRouteChangeComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        setLoading(false);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    return loading;
};
