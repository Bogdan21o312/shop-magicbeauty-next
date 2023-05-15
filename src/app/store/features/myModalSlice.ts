import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "@/app/store/store";

interface MyModalState {
    [modalId: string]: boolean;
}

const initialState: MyModalState = {
    isModalVisible: false,
};

export const myModalSlice = createSlice({
    name: 'myModal',
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<string>) => {
            const modalId = action.payload;
            state[modalId] = true;
        },
        hideModal: (state, action: PayloadAction<string>) => {
            const modalId = action.payload;
            state[modalId] = false;
        },
    },
});

export const { showModal, hideModal } = myModalSlice.actions;

export const selectIsModalVisible = (state: RootState, modalId: string) => state.myModal[modalId];

export default myModalSlice.reducer;
