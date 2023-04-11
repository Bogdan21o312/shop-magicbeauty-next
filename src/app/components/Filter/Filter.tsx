import React, {FC, useState} from 'react';
import classes from "./Filter.module.scss"
import {IFilter} from "@/app/components/Filter/IFilter";
import {Select, Text} from "@/app/UI";

export const Filter: FC<IFilter> = ({children}) => {

    const [how, setHow] = useState(classes.productsHowBaz);
    const [activeButton, setActiveButton] = useState(6);
    const [categories, setCategories] = useState([
        { id: 1, name: 'lorem AC', active: false },
        { id: 2, name: 'lorem WS', active: false },
        { id: 3, name: 'lorem VC', active: false },
        { id: 4, name: 'lorem P', active: false }
    ]);

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const productsHowFour = classes.productsHowFour;
    const productsHowFive = classes.productsHowFive;
    const productsHowSix = classes.productsHowSix;
    const productsHowSeven = classes.productsHowSeven;
    const productsHowEight = classes.productsHowEight;

    function handleFourItems() {
        setHow(productsHowFour);
        setActiveButton(4);
    }

    function handleFiveItems() {
        setHow(productsHowFive);
        setActiveButton(5);
    }

    function handleSixItems() {
        setHow(productsHowSix);
        setActiveButton(6);
    }

    function handleSevenItems() {
        setHow(productsHowSeven);
        setActiveButton(7);
    }

    function handleEightItems() {
        setHow(productsHowEight);
        setActiveButton(8);
    }

    function handleCategoryClick(id: number) {
        const updatedCategories = categories.map(category => {
            if (category.id === id) {
                return {
                    ...category,
                    active: !category.active
                };
            } else {
                return category;
            }
        });
        setCategories(updatedCategories);
    }


    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <div className={classes.switch}>
                    <Text smallText>Вид</Text>
                    <div className={classes.buttons}>
                        <button
                            onClick={handleFourItems}
                            className={`${classes.button} ${activeButton === 4 ? classes._active : ''}`}
                        >
                            4
                        </button>
                        <button
                            onClick={handleFiveItems}
                            className={`${classes.button} ${activeButton === 5 ? classes._active : ''}`}
                        >
                            5
                        </button>
                        <button
                            onClick={handleSixItems}
                            className={`${classes.button} ${activeButton === 6 ? classes._active : ''}`}
                        >
                            6
                        </button>
                        <button
                            onClick={handleSevenItems}
                            className={`${classes.button} ${activeButton === 7 ? classes._active : ''}`}
                        >
                            7
                        </button>
                        <button
                            onClick={handleEightItems}
                            className={`${classes.button} ${activeButton === 8 ? classes._active : ''}`}
                        >
                            8
                        </button>
                    </div>
                </div>
                <div className={classes.categories}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`${classes.category} ${category.active ? classes._active : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <Select options={options} />
            </div>
            <div className={`${classes.products} ${how}`}>
                {children}
            </div>
        </div>
    );
};
