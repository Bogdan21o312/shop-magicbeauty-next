import {FullPageScroll, VisibilitySensor} from "@/app/components";
import {FC, ReactNode, useRef} from "react";
import classes from "./About.module.scss"
import {LayoutAbout} from "@/app/screens/About/LayoutAbout";
import {FullScreen} from "@/app/screens/About/components";
import {MainAbout, TheSimplestThingsAbout} from "@/app/screens/About/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import "swiper/css";


export const About = () => {
    // const handleNext = () => {
    //     console.log('Next button clicked');
    // };
    //
    // const handlePrev = () => {
    //     console.log('Prev button clicked');
    // };
    return (
        // <div style={{ height: '100vh', overflow: 'hidden' }}>
        //     <FullPageScroll onScrollNext={handleNext} onScrollPrev={handlePrev}>
        //         <div style={{ height: '100vh', backgroundColor: 'red' }}>
        //             <h1>Page 1</h1>
        //             <p>This is page 1 content</p>
        //         </div>
        //         <div style={{ height: '100vh', backgroundColor: 'blue' }}>
        //             <h1>Page 2</h1>
        //             <p>This is page 2 content</p>
        //         </div>
        //         <div style={{ height: '100vh', backgroundColor: 'green' }}>
        //             <h1>Page 3</h1>
        //             <p>This is page 3 content</p>
        //         </div>
        //     </FullPageScroll>
        // </div>
        <div>
            <Swiper style={{maxHeight: '100vh'}}
                    direction={"vertical"}
                    slidesPerView={1}
                    mousewheel={true}
                    freeMode={true}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true
                    }}
            >
                <SwiperSlide style={{maxHeight: '100vh'}}>Slide 1</SwiperSlide>
                <SwiperSlide style={{maxHeight: '100vh'}}>Slide 2</SwiperSlide>
                <SwiperSlide style={{maxHeight: '100vh'}}>Slide 3</SwiperSlide>
            </Swiper>
            <style jsx>{`
              body, html {
                overflow: hidden;
              }
            `}</style>
        </div>
    );
};
