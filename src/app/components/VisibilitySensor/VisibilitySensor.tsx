import { useState, useLayoutEffect, useRef, ReactNode } from "react";

interface VisibilitySensorProps {
    className: string;
    children: ReactNode;
}

export const VisibilitySensor = ({ className, children }: VisibilitySensorProps) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const onScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (
                    rect.bottom >= 0 &&
                    rect.top <= windowHeight &&
                    rect.height > 0
                ) {
                    setVisible(true);
                    window.removeEventListener("scroll", onScroll);
                }
            }
        };

        // Перевірка, чи був елемент видимим при завантаженні сторінки
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (
                rect.bottom >= 0 &&
                rect.top <= windowHeight &&
                rect.height > 0
            ) {
                setVisible(true);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div ref={ref} className={visible ? className : ""}>
            {children}
        </div>
    );
};
