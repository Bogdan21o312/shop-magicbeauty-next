import Image from "@/assets/images/test.jpeg";
import {ProductCard} from "@/app/components";
import classes from "./ProductList.module.scss"
import {
    useCreateGelPolishesKodiMutation,
    useGetGelPolishesKodiQuery
} from "@/app/services/gel-polishes-kodi.api";
import {wrapper} from "@/app/store/store";
import {IProduct} from "@/app/types/IProduct";
import {Create} from "@/app/modules/ProductList/create";
import {useState} from "react";


export const ProductList = () => {
    const {data, isLoading, isError} = useGetGelPolishesKodiQuery()
    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching posts</div>;
    }

    const mainData = data.data
    return (
        <>
            <Create/>
            <div className={classes.items}>
                {mainData.map(product =>
                    <ProductCard key={product._id} imageSrc={product.picture} imageAlt={'Image'} title={product.title}
                                 size={product.capacity} name={product.name} price={1}/>
                )}

            </div>
        </>
    );
};

export const getServerSidePropsWrapper = wrapper.getServerSideProps(
    async ({store}) => {
        // @ts-ignore
        await store.dispatch(useGetGelPolishesKodiQuery);
    }
)
