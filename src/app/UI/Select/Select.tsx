import React, { useState, useRef, useEffect } from 'react';
import classes from "./Select.module.scss"

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
}

export const Select: React.FC<CustomSelectProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        setIsOpen(false);
    };

    const handleSelectClick = () => {
        setIsOpen(true);
    };

    const handleBodyClick = (e: MouseEvent) => {
        if (
            !selectRef.current?.contains(e.target as Node) &&
            isOpen &&
            selectedOption !== null
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [isOpen, selectedOption]);

    return (
        <div className={classes.customSelect}>
            <div
                className={`${classes.customSelect__select} ${isOpen ? classes.open : ''}`}
                onClick={handleSelectClick}
            >
                <div className={classes.customSelect__selectedOption}>
                    {selectedOption !== null ? options.find(option => option.value === selectedOption)?.label : 'Select an option'}
                </div>
                <div className={classes.customSelect__arrow}>
                    <span className={isOpen ? classes.arrowUp : classes.arrowDown}></span>
                </div>
            </div>
            {isOpen && (
                <ul className={classes.customSelect__options}>
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={`
                ${classes.customSelect__option}
                ${option.value === selectedOption ? classes.customSelect__optionSelected : ''}
              `}
                            onClick={() => handleSelectChange({ target: { value: option.value } } as React.ChangeEvent<HTMLSelectElement>)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
