import {MainBlock, Slider} from "@/modules";

export const Home = () => {
    return (
        <div style={{paddingTop: '400px'}}>
            <MainBlock/>
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </div>
    );
};
