import Head from 'next/head'
import {Inter} from 'next/font/google'
import {useState} from "react";
import {useStarRating} from "@/hooks";
import {Button} from "@/UI";
import {ProductCard} from "@/components";
import Image from "../assets/images/test.jpeg"
import {SwiperSlider} from "@/modules/Slider/components/SwiperSlider";

export default function Home() {

    const second = 1000
    const minutes = 1000 * 60
    const hours = minutes * 600
    const days = hours * 24


    const [rating, setRating] = useState(0);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <div style={{paddingTop: 300}}>
            {/*<SwiperSlider/>*/}
        </div>
    )
}
