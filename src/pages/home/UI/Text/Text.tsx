import React, {FC, ReactNode} from 'react';

interface Text {
    children: ReactNode
}

export const Text:FC<Text> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};
