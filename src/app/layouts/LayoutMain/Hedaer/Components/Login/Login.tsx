import React, {useState} from 'react';
import dynamic from "next/dynamic";
import classes from "./Login.module.scss"
import {Loader} from "@/app/UI";
import {Form} from "@/app/components";
const ModalWindow = dynamic(() => import('@/app/UI').then((mod) => mod.ModalWindow), {
    ssr: false,
    loading: () => <Loader/>,
})

export const Login = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className={classes.main}>
            <ModalWindow hashUrl={'login'} title={'Login'} visible={isModalVisible} setVisible={setIsModalVisible}>
                <Form />
            </ModalWindow>
            <button onClick={showModal}  className={classes.text}>Вхід</button>
        </div>
    );
};
