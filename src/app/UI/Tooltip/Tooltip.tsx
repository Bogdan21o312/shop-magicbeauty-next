import TooltipStyles from "./Tooltip.module.scss";
import React, { useRef, useState } from "react";

const defaultContent = () => {
    return <div style={{ color: "red" }}>Please Put Content in Prop!!</div>;
};

type TooltipProps = {
    children: React.ReactNode;
    renderContent?: () => React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    offsetY?: number;
    offsetX?: number;
    behavior?: "hover" | "click";
};

export const Tooltip = ({
                     children,
                     renderContent = defaultContent,
                     position = "top",
                     offsetY = 0,
                     offsetX = 0,
                     behavior = "hover",
                 }: TooltipProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClicked, setClick] = useState(false);

    function getPosition(pos: string) {
        switch (pos) {
            case "top":
                return {
                    transform: `translateX(${offsetX}px)`,
                    bottom: `calc(110% + ${offsetY}px)`,
                };
            case "bottom":
                return {
                    transform: `translateX(${offsetX}px)`,
                    top: `calc(110% + ${offsetY}px)`,
                };
            case "left":
                return {
                    transform: `translateY(${offsetY}px) translateX(-110%)`,
                    left: `-${offsetX}px`,
                };
            case "right":
                return {
                    transform: `translateY(${offsetY}px) translateX(110%)`,
                    right: `-${offsetX}px`,
                };
            default:
                return {
                    transform: `translateX(${offsetX})`,
                    bottom: `calc(110% + ${offsetY}px)`,
                };
        }
    }

    function handleClick() {
        if (!isClicked) {
            document.addEventListener("click", handleOutsideClick, false);
        } else {
            document.removeEventListener("click", handleOutsideClick, false);
        }

        setClick(!isClicked);
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if (containerRef.current?.contains(e.target as Node)) {
            return;
        }
        setClick(false);
    };

    function constructProps(behavior: string) {
        if (behavior === "hover") {
            return {
                className: `${TooltipStyles.container} ${TooltipStyles.behavior_hover}`,
            };
        }
        if (behavior === "click") {
            return {
                ref: containerRef,
                className: `${TooltipStyles.container} ${
                    TooltipStyles[
                        `behavior_click_${(isClicked && "active") || "inactive"}`
                        ]
                }`,
                onClick: handleClick,
            };
        }
    }

    const behaviorProps = constructProps(behavior.toLowerCase());
    const positionFixed = position.toLowerCase().replace(/\s/g, "");

    return (
        <div {...behaviorProps}>
            <div
                id="tooltipID"
                className={TooltipStyles.tooltip}
                style={{ ...getPosition(positionFixed) }}
            >
                <div
                    className={`${TooltipStyles.tooltip_content} ${
                        TooltipStyles[`tooltip_position_${positionFixed}`]
                    }`}
                >
                    {renderContent()}
                </div>
            </div>
            {children}
        </div>
    );
};
