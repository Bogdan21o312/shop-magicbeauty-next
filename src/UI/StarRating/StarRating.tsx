import React, { useState } from 'react';

interface RatingProps {
    value?: number;
    onChange?: (value: number) => void;
    ajax?: boolean;
}

export const StarRating: React.FC<RatingProps> = ({ value = 0, onChange, ajax }) => {
    const [hoverValue, setHoverValue] = useState(0);

    const handleMouseEnter = (value: number) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(0);
    };

    const handleClick = (value: number) => {
        if (onChange) {
            onChange(value);
        }
    };

    const handleStarClick = async (value: number) => {
        if (ajax) {
            try {
                const response = await fetch('rating.json', {
                    method: 'GET',
                    // body: JSON.stringify({ userRating: value }),
                    // headers: { 'content-type': 'application/json' },
                });
                if (response.ok) {
                    const result = await response.json();
                    const newRating = result.newRating;
                    if (onChange) {
                        onChange(newRating);
                    }
                } else {
                    alert('Помилка');
                }
            } catch (error) {
                alert('Помилка');
            }
        } else {
            handleClick(value);
        }
    };

    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= (hoverValue || value);
        const className = filled ? 'fas' : 'far';
        const starIcon = (
            <i
                key={i}
                className={`${className} fa-star`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStarClick(i)}
            />
        );
        starIcons.push(starIcon);
    }

    return <div className="rating">{starIcons}</div>;
};
