import {Button, Text} from "@/UI";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";

import {button, text, title, main} from "./MainSlider.module.scss"
import {FC} from "react";
import {IMainSlider} from "@/pages/home/modules/MainBlock/componets/MainSlider/IMainSlider";

export const MainSlider: FC<IMainSlider> = ({data}) => {
    return (
        <>
            <Swiper className={main}
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
                slidesPerView={1}
                spaceBetween={30}
                parallax={true}
                speed={800}
            >
                {data.map(item =>
                    <SwiperSlide>
                        <div className={title}>
                            <Text title>{item.title}</Text>
                        </div>
                        <div className={text}>
                            <Text text>
                                {item.text}
                            </Text>
                        </div>
                        <div className={button}>
                            <Button as={'button'} text={item.button}/>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};
