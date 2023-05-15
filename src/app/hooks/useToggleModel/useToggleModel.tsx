import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { hideModal, selectIsModalVisible, showModal } from "@/app/store/features/myModalSlice";

export const useToggleModel = (HASH: string) => {
    const dispatch = useDispatch();
    const isModalVisible = useSelector((state: RootState) => selectIsModalVisible(state, HASH));

    const handleShowModal = () => {
        dispatch(showModal(HASH));
    };

    const handleHideModal = () => {
        dispatch(hideModal(HASH));
    };

    return {
        isModalVisible,
        handleShowModal,
        handleHideModal,
    };
};
