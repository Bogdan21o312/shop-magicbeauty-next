import {MainBlock, Slider} from "@/screens/Home/modules";
import {useIsTouchDevice} from "@/hooks";
export const Home = () => {
    const isTouch = useIsTouchDevice()

    return (
        <div style={{paddingTop: '400px'}}>
            <MainBlock/>
            {isTouch ? (<div>isTouch true</div>) : <div>isTouch false</div>} <br/>
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </div>
    );
};
