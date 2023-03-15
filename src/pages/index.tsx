import Head from 'next/head'
import {Inter} from 'next/font/google'
import {useState} from "react";
import {useStarRating} from "@/hooks";
import {Button} from "@/ui";
import {ProductCard} from "@/components";
import Image from "../assets/images/test.jpeg"
import {Slider} from "@/components/Slider";

export default function Home() {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <div style={{paddingTop: 300}}>
            <Slider/>
        </div>
    )
}
