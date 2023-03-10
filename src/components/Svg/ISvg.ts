type CommonSvgProps = {
    light?: boolean
    dark?: boolean
    active?: boolean
    hover?: boolean
}


type ArrowSvgProps = CommonSvgProps & {
    arrow?: boolean
    cart?: never
    location?: never
    love?: never
    search?: never
    suitcase?: never
};

type CartSvgProps = CommonSvgProps & {
    arrow?: never
    cart?: boolean
    location?: never
    love?: never
    search?: never
    suitcase?: never
};

type LocationSvgProps = CommonSvgProps & {
    arrow?: never
    cart?: never
    location?: boolean
    love?: never
    search?: never
    suitcase?: never
};

type LoveSvgProps = CommonSvgProps & {
    arrow?: never
    cart?: never
    location?: never
    love?: boolean
    search?: never
    suitcase?: never
};

type SearchSvgProps = CommonSvgProps & {
    arrow?: never
    cart?: never
    location?: never
    love?: never
    search?: boolean
    suitcase?: never
};

type SuitcaseSvgProps = CommonSvgProps & {
    arrow?: never
    cart?: never
    location?: never
    love?: never
    search?: never
    suitcase?: boolean
};


export type SvgProps =
    ArrowSvgProps
    | CartSvgProps
    | LocationSvgProps
    | LoveSvgProps
    | SearchSvgProps
    | SuitcaseSvgProps
