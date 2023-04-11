import React from 'react';
import {LayoutMain} from "@/app/layouts";
import {Filter, ProductCard, TimerMainContent} from "@/app/components";
import Image from "@/assets/images/test.jpeg";

export const GelPolishesKodi = () => {
    return (
        <LayoutMain>
            ProductsGelPolishesKodi
            <TimerMainContent/>
            <Filter>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
                <ProductCard imageSrc={Image} imageAlt={'Image'} title={'Title'} size={'16'} name={'Гель'} textButton={'Купити'} price={20} rating={false} sale={123}/>
            </Filter>
        </LayoutMain>
    );
};
