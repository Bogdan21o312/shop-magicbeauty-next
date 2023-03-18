import {useAppDispatch, useAppSelector} from "@/app/hooks/redux";
import {useHover} from "@/app/hooks/useHover";
import {useStarRating} from "@/app/hooks/useStarRating";
import {useTabsToggle} from "@/app/hooks/useTabToggle";
import {useMediaQuery} from "@/app/hooks/useMediaQuery";
import {useIsTouchDevice} from "@/app/hooks/useIsTouchDevice";

export {
    useTabsToggle,
    useAppSelector,
    useStarRating,
    useAppDispatch,
    useHover,
    useMediaQuery,
    useIsTouchDevice
}
