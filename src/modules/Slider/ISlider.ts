type CommonISliderProps = {
    title: string
    link: string
    linkText: string
};

type ActionISliderProps = CommonISliderProps & {
    action?: boolean;
    bestsellers?: never
    recommended?: never
    similar?: never
};

type BestsellersISliderProps = CommonISliderProps & {
    action?: never;
    bestsellers?: boolean
    recommended?: never
    similar?: never
};

type RecommendedISliderProps = CommonISliderProps & {
    action?: never;
    bestsellers?: never
    recommended?: boolean
    similar?: never
};

type SimilarISliderProps = CommonISliderProps & {
    action?: never;
    bestsellers?: never
    recommended?: never
    similar?: boolean
};

export type ISliderProps = ActionISliderProps | BestsellersISliderProps | RecommendedISliderProps | SimilarISliderProps
