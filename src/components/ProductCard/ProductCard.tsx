import {FC} from "react";
import {IProductCard} from "@/components/ProductCard/IProductCard";
import {main, clImage, numberReviews, priceNum, priceLove, clPrice, flex, mainLine, blockText, mainImage} from "./ProductCard.module.scss"
import {Button, Ibg, StarRating, Text} from "@/UI";
import {Cart, Love} from "@/assets/config";

export const ProductCard: FC<IProductCard> = ({
                                                  textButton,
                                                  imageAlt,
                                                  numberOFReviews,
                                                  rating,
                                                  imageSrc,
                                                  title,
                                                  size,
                                                  price,
                                                  name
                                              }) => {
    return (
        <div className={main}>
            <div className={mainImage}>
                <Ibg src={imageSrc} alt={imageAlt} modClass={clImage}></Ibg>
            </div>
            <div className={blockText}>
                <Text subTitle>{title}</Text>
                <div className={flex}>
                    <Text  opacity smallText>{size}</Text>
                    <Text opacity smallText>{name}</Text>
                </div>
                {rating ?
                    <div className={flex}>
                        <StarRating value={numberOFReviews}></StarRating>
                        <div className={numberReviews}>{numberOFReviews}</div>
                    </div>
                    :
                    null
                }
            </div>
            <div className={mainLine}></div>
            <div className={clPrice}>
                <div className={priceNum}>{price} грн.</div>
                <button className={priceLove}><Love/></button>
            </div>
            <Button as={'button'} widthHundredPercent text={textButton} icon={<Cart/>}/>
        </div>
    );
};
