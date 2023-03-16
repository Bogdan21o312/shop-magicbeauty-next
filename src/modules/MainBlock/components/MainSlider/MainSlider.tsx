import {Button, Text} from "@/UI";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";

import classes from "./MainSlider.module.scss"
import {FC} from "react";
import {IMainSlider} from "@/modules/MainBlock/components/MainSlider/IMainSlider";

export const MainSlider: FC<IMainSlider> = ({data}) => {
    return (
        <>
            <Swiper className={classes.main}
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
                    <SwiperSlide key={item.title}>
                        <div className={classes.title}>
                            <Text title>{item.title}</Text>
                        </div>
                        <div className={classes.text}>
                            <Text text>
                                {item.text}
                            </Text>
                        </div>
                        <div className={classes.button}>
                            <Button as={'button'} text={item.button}/>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};
