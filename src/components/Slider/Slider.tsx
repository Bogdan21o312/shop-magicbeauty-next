import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {} from "./Slider.module.scss"
import Image from "../../assets/images/test.jpeg"
import "swiper/css";
import {ProductCard} from "@/components";

export const Slider = () => {

    return (
        <>
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }} modules={[Navigation, Pagination, Autoplay]}
                observer={true}
                watchOverflow={true}
                observeParents={true}
                slidesPerView={7}
                spaceBetween={30}
                parallax={true}
                speed={800}
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
