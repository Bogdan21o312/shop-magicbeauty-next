import {MainBlock, Slider} from "@/screens/Home/modules";
import {useMobileDetect} from "@/hooks";

export const Home = () => {
    const detectMobile = useMobileDetect();
    return (
        <div style={{paddingTop: '400px'}}>
            <MainBlock/>
            is Mobile: { detectMobile.isMobile() } <br/>
            is Desktop: { detectMobile.isDesktop() } <br/>
            is Android: { detectMobile.isAndroid() } <br/>
            is iOS: { detectMobile.isIos() }
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </div>
    );
};
