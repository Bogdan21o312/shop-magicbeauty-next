import {MainBlock, PostList, Slider} from "@/app/screens/Home/modules";
import {useIsTouchDevice} from "@/app/hooks";
import {ProductList} from "@/app/modules";
import {Accordion, Input} from "@/app/UI";
import {useFormValidation} from "@/app/hooks/useFormValidation";

export const Home = () => {
    const isTouch = useIsTouchDevice()

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        isDisabled,
        showPassword,
        setShowPassword,
    } = useFormValidation();
    const items = [
        {
            id: 1,
            title: 'Section 1',
        },
        {
            id: 2,
            title: 'Section 2',
        },
    ];

    return (
        <div style={{paddingTop: '400px'}}>
            <MainBlock/>
            <PostList/>
            <div>
                <h1>Accordion Example</h1>
                <Accordion items={items}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque exercitationem maxime natus repudiandae sed ullam? Explicabo illo iste laudantium, obcaecati officia quia veniam voluptatibus. Accusantium dolores fugiat laboriosam necessitatibus sint!
                </Accordion>
            </div>
            <Input/>
            <ProductList/>
            {isTouch ? (<div>isTouch true</div>) : <div>isTouch false</div>} <br/>
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </div>

    );
};
