import {MainBlock} from "@/pages/home/modules";
import {Slider} from "@/modules/Slider/Slider";

export default function index() {
    return (
        <div style={{paddingTop: '400px'}}>
            <MainBlock/>
            <Slider title={'Title'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title'} link={'/'} linkText={'побачити ще'} action={false}/>
        </div>
    );
};
