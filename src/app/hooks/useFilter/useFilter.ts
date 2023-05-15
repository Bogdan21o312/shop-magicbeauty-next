import {useState} from "react";

type SortFilter = 'default' | 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';


type Item = {
    name: string;
    price: number;
};

export const useFilter = (initialItems: any[]) => {
    const [items, setItems] = useState(initialItems);
    const [filter, setFilter] = useState<SortFilter>('default');

    const sortItems = () => {
        switch (filter) {
            case 'name-asc':
                setItems([...items].sort((a, b) => a.name.localeCompare(b.name)));
                break;
            case 'name-desc':
                setItems([...items].sort((a, b) => b.name.localeCompare(a.name)));
                break;
            case 'price-asc':
                setItems([...items].sort((a, b) => a.price - b.price));
                break;
            case 'price-desc':
                setItems([...items].sort((a, b) => b.price - a.price));
                break;
            default:
                setItems(initialItems);
                break;
        }
    };

    return { items, setItems, filter, setFilter, sortItems };
};
