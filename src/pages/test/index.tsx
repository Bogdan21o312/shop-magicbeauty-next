import {useDispatch, useSelector} from "react-redux";
import {useGetTodosQuery} from "@/app/store/post";
import {wrapper} from "@/app/store/store";

const Index = () => {
    const { data, isLoading, isError } = useGetTodosQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching posts</div>;
    }

    return (
        <ul>
            {data?.map((post) => (
                <li key={post.id}>
                    <h2>{post.id} {post.title}</h2>
                    <br/>
                </li>
            ))}
        </ul>
    );

};

export default Index;

export const getServerSidePropsWrapper = wrapper.getServerSideProps(
    async ({ store }) => {
        await store.dispatch(useGetTodosQuery);
    }
)
