import {Advantages, MainImage, MainSlider} from "@/modules/MainBlock/components";
import Image from "../../assets/images/main.jpeg"
import coverImage from "../../assets/images/cover.jpg"
import classes from "./MainBlock.module.scss"
import {Ibg, Text} from "@/UI";

export const MainBlock = () => {

    const data = [
        {
            "title": "Title 1",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur deleniti dolor dolore doloremque eaque expedita fugiat harum ipsa magnam, magni molestias nobis odio officiis quis recusandae tempora ut, voluptatibus!",
            "button": "Text 1"
        },
        {
            "title": "Title 2",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur deleniti dolor dolore doloremque eaque expedita fugiat harum ipsa magnam, magni molestias nobis odio officiis quis recusandae tempora ut, voluptatibus!",
            "button": "Text 2"
        },
        {
            "title": "Title 3",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur deleniti dolor dolore doloremque eaque expedita fugiat harum ipsa magnam, magni molestias nobis odio officiis quis recusandae tempora ut, voluptatibus!",
            "button": "Text 3"
        }
    ]


    return (
        <div className={classes.main}>
            <div className={classes.mainImage}>
                <Ibg src={coverImage} alt={'cover'} modClass={classes.mainImageIbg}/>
            </div>
            <div className={classes.title}>
                <Text titleBig as={'h1'}>Головна</Text>
            </div>
            <div className={classes.flex}>
                <div className={classes.slider}>
                    <MainSlider data={data}/>
                </div>
                <div className={classes.image}>
                    <MainImage mainImage={Image} mainAlt={'Main'}/>
                </div>
            </div>
            <div className={classes.footer}>
                <Advantages/>
            </div>
        </div>
    );
};
