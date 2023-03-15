
export interface IProductCard {
    imageSrc: string
    imageAlt: string
    title: string
    size: string
    name: string

    textButton: string

    price: number

    rating?: boolean
    ratingAverage?: number
    numberOFReviews?: number
}
