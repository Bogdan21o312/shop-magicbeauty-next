import Image from "@/assets/images/test.jpeg";
import {ProductCard} from "@/app/components";
import classes from "./ProductList.module.scss"
import {
    useCreateGelPolishesKodiMutation, useDeleteGelPolishesKodiMutation,
    useGetGelPolishesKodiQuery,
    useUpdateGelPolishesKodiMutation
} from "@/app/services/gel-polishes-kodi.api";
import {wrapper} from "@/app/store/store";
import {useGetTodosQuery} from "@/app/store/post";
import {IProduct} from "@/app/types/IProduct";



export const ProductList = () => {
    const {data, isLoading, isError} = useGetGelPolishesKodiQuery()
    const [createPost, {error: createError, isLoading: isCreateLoading}] = useCreateGelPolishesKodiMutation()
    const [updatePost, {}] = useUpdateGelPolishesKodiMutation()
    const [deletePost, {}] = useDeleteGelPolishesKodiMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, capacity: title} as IProduct)
    }

    const handleRemove = (product: IProduct) => {
        deletePost(product)
    }

    const handleUpdate = (product: IProduct) => {
        updatePost(product)
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching posts</div>;
    }

    return (
        <div className={classes.items}>
            {data?.map(product =>
                <ProductCard key={product._id} imageSrc={Image} imageAlt={'Image'} title={product.title} size={product.capacity} name={product.name} price={product.price}/>
            )}
            {/*<ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'}*/}
            {/*             textButton={'Купити'} price={20} rating={false}/>*/}

        </div>
    );
};

export const getServerSidePropsWrapper = wrapper.getServerSideProps(
    async ({ store }) => {
        // @ts-ignore
        await store.dispatch(useGetGelPolishesKodiQuery);
    }
)
