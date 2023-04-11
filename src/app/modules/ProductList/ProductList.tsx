import Image from "@/assets/images/test.jpeg";
import {ProductCard} from "@/app/components";
import classes from "./ProductList.module.scss"
import {useDeleteGelPolishesKodiMutation, useGetGelPolishesKodiQuery} from "@/app/services/gel-polishes-kodi.api";
import {wrapper} from "@/app/store/store";
import {Create} from "@/app/modules/ProductList/create";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, Loader} from "@/app/UI";
import {bodyLock, bodyUnlock} from "@/app/utils";
import {IProduct} from "@/app/types/IProduct";


export const ProductList = () => {
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [isLoadingQuery, setIsLoadingQuery] = useState(false);
    const {data, isLoading, isError} = useGetGelPolishesKodiQuery({_limit: limit, _page: page, _search: search})
    const [deleteGelPolishesKodi, {
        error: errorDeleteGelPolishesKodiMutation,
        isLoading: isLoadingDeleteGelPolishesKodiMutation
    }] = useDeleteGelPolishesKodiMutation()
    const isPostsEmpty = !isLoading && !isError && data && data.data && data.data.length === 0;
    useEffect(() => {
        setIsLoadingQuery(false);
        bodyUnlock()
    }, [data]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching posts</div>;
    }

    function handleRemove(item: IProduct) {
        bodyLock()
        setIsLoadingQuery(false);
        deleteGelPolishesKodi(item)
    }

    function incrementPage() {
        bodyLock()
        setIsLoadingQuery(true);
        setPage(page + 1)
    }

    function decrementPage() {
        bodyLock()
        setIsLoadingQuery(true);
        setPage(page - 1)
    }

    function incrementLimit() {
        bodyLock()
        setIsLoadingQuery(true);
        setLimit(limit + 1)
    }

    function decrementLimit() {
        bodyLock()
        setIsLoadingQuery(true);
        setLimit(limit - 1)
    }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        bodyLock()
        setIsLoadingQuery(true);
        setSearch(event.target.value)
    }


    const mainData = data.data
    return (
        <div>
            {isLoadingQuery && <Loader/>}
            <Create/>
            <Button text={'Prev Page'}
                    onClick={decrementPage}
                    disabled={page === 1}
            />
            <Button
                text={'Next Page'}
                onClick={incrementPage}
            />
            <Button text={'- Limit'}
                    onClick={decrementLimit}
                    disabled={limit === 1}
            />
            <Button
                text={'+ Limit'}
                onClick={incrementLimit}
            />
            <input type="text" placeholder="Search..." value={search} onChange={handleSearch}/>
            <div className={classes.items}>
                {mainData.map(product =>
                    <ProductCard item={product} key={product._id} imageSrc={product.picture} imageAlt={'Image'}
                                 title={product.title}
                                 size={product.capacity} name={product.name} price={1}
                                 remove={handleRemove}
                    />
                )}
                {isPostsEmpty && <div>No posts found</div>}
            </div>
        </div>
    );
};

export const getServerSidePropsWrapper = wrapper.getServerSideProps(
    async ({store}) => {
        // @ts-ignore
        await store.dispatch(useGetGelPolishesKodiQuery, useDeleteGelPolishesKodiMutation);
    }
)
