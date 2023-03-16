import {Advantages, MainImage, MainSlider} from "@/pages/home/modules/MainBlock/components";
import Image from "../../../../assets/images/main.jpeg"
import coverImage from "../../../../assets/images/cover.jpg"
import {main, flex, slider, image, mainImageIbg, footer, mainImage, title} from "./MainBlock.module.scss"
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
        <div className={main}>
            <div className={mainImage}>
                <Ibg src={coverImage} alt={'cover'} modClass={mainImageIbg}/>
            </div>
            <div className={title}>
                <Text titleBig as={'h1'}>Головна</Text>
            </div>
            <div className={flex}>
                <div className={slider}>
                    <MainSlider data={data}/>
                </div>
                <div className={image}>
                    <MainImage mainImage={Image} mainAlt={'Main'}/>
                </div>
            </div>
            <div className={footer}>
                <Advantages/>
            </div>
        </div>
    );
};
