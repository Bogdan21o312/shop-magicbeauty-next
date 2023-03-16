import {Slider} from "@/modules/Slider/Slider";
import {MainBlock} from "@/modules";

export default function index() {
    return (
        <div style={{paddingTop: '400px'}}>
            <MainBlock/>
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </div>
    );
};
