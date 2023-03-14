import { useState } from 'react';

type UseStarRatingProps = {
    initialRating?: number;
    maxStars?: number;
};

type UseStarRatingReturnType = {
    rating: number;
    handleRate: (newRating: number) => void;
};

export const useStarRating = ({
                           initialRating = 0,
                           maxStars = 5,
                       }: UseStarRatingProps): UseStarRatingReturnType => {
    const [rating, setRating] = useState(initialRating);

    const handleRate = (newRating: number) => {
        setRating(newRating);
        // Here you can save the user's rating in a database or do whatever you need to with it
    };

    return { rating, handleRate };
};
