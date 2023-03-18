import {useIsTouchDevice, useMediaQuery} from "@/app/hooks";
import {HeaderCenterMobile} from "@/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterMobile";
import {HeaderCenterDesktop} from "@/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop";

export const HeaderCenter = () => {
    const isTouch = useIsTouchDevice()
    const matches = useMediaQuery()
    return (
        <>
            {matches || isTouch?
                 <HeaderCenterMobile/>
                :
                 <HeaderCenterDesktop/>
            }
        </>
    );
};
