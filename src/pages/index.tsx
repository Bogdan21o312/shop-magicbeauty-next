import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import Rating from "@/ui/Rating/Rating";
import {useState} from "react";
import {useStarRating} from "@/hooks";
import {Button} from "@/ui";

export default function Home() {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    return (
        <div style={{marginTop: 200}}>
            <Button as={'button'} text='dadf'>flaksdm</Button>
        </div>
    )
}
