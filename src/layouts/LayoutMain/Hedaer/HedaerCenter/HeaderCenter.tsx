import classes from "./HedaerCenter.module.scss"
import {useIsTouchDevice} from "@/hooks";
import {HeaderCenterMobile} from "@/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterMobile";
import {HeaderCenterDesktop} from "@/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop";

export const HeaderCenter = () => {
    const isTouch = useIsTouchDevice()
    return (
        <>
            {isTouch?
                <HeaderCenterMobile/>
                :
                <HeaderCenterDesktop/>
            }
        </>
    );
};
