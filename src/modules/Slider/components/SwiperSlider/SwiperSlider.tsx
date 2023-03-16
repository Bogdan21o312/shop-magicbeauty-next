import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import classes from "./SwiperSlider.module.scss"
import Image from "../../../../assets/images/test.jpeg"
import "swiper/css";
import {ProductCard} from "@/components";

export const SwiperSlider = () => {

    return (
        <>
            <Swiper
                loop={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }} modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={10}
                spaceBetween={30}
                parallax={true}
                speed={800}
                breakpoints={{
                    // when window width is >= 576px
                    1: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    750: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    950: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    // when window width is >= 768px
                    1500: {
                        slidesPerView: 6,
                    },
                    // when window width is >= 1024px
                    1700: {
                        slidesPerView: 7,
                    },
                    1960: {
                        slidesPerView: 8,
                    },
                    2300: {
                        slidesPerView: 9,
                    },
                    2500: {
                        slidesPerView: 10,
                    },
                }}
            >
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false}/>
                </SwiperSlide>


            </Swiper>
        </>
    );
};
