import {MainBlock, PostList, Slider} from "@/app/screens/Home/modules";
import {useIsTouchDevice} from "@/app/hooks";
import {ProductList} from "@/app/modules";
import {Input} from "@/app/UI";
import {LayoutMain} from "@/app/layouts";

export const Home = () => {
    const isTouch = useIsTouchDevice()

    return (
        <LayoutMain>
            <MainBlock/>
            <PostList/>
            <Input/>
            <ProductList/>
            {isTouch ? (<div>isTouch true</div>) : <div>isTouch false</div>} <br/>
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </LayoutMain>

    );
};
