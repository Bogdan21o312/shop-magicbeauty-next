import {MainBlock, PostList, Slider} from "@/app/screens/Home/modules";
import {useFilter, useIsTouchDevice} from "@/app/hooks";
import {ProductList} from "@/app/modules";
import {LayoutMain} from "@/app/layouts";
import {useState} from "react";
import classes from "./Home.module.scss"

export const Home = () => {
    const items = [
        {name: 'Apple', price: 1.50},
        {name: 'Banana', price: 2.00},
        {name: 'Orange', price: 1.75},
        {name: 'Pineapple', price: 3.50},
        {name: 'Watermelon', price: 5.00},
    ];
    // const {items: filteredItems, setFilter, sortItems} = useFilter(items);
    const isTouch = useIsTouchDevice()

    return (
        <LayoutMain>
            {/*<ul>*/}
            {/*    {filteredItems.map((item, index) => (*/}
            {/*        <li key={index}>*/}
            {/*            {item.name} - ${item.price.toFixed(2)}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            {/*<button onClick={() => setFilter('name-asc')}>Sort by name A-Z</button>*/}
            {/*<button onClick={() => setFilter('name-desc')}>Sort by name Z-A</button>*/}
            {/*<button onClick={() => setFilter('price-asc')}>Sort by price (low to high)</button>*/}
            {/*<button onClick={() => setFilter('price-desc')}>Sort by price (high to low)</button>*/}
            {/*<button onClick={() => setFilter('default')}>Default sorting</button>*/}
            {/*<button onClick={() => sortItems()}>Apply filter</button>*/}


            {/*<MainBlock/>*/}
            <ProductList/>
            {isTouch ? (<div>isTouch true</div>) : <div>isTouch false</div>} <br/>
            <Slider title={'Title1'} link={'/'} linkText={'побачити ще'} action={false}/>
            <Slider title={'Title2'} link={'/'} linkText={'побачити ще'} action={false}/>
        </LayoutMain>

    );
};
