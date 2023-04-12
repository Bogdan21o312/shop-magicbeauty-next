import React, {useState} from 'react';
import dynamic from "next/dynamic";
import classes from "./Login.module.scss"
import {Loader} from "@/app/UI";
import {Form} from "@/app/components";
import {useLoginMutation} from "@/app/services/login.api";
import {ILogin} from "@/app/types/IAuth";
const ModalWindow = dynamic(() => import('@/app/UI').then((mod) => mod.ModalWindow), {
    ssr: false,
    loading: () => <Loader/>,
})

export const Login = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [login, {error: loginError, isLoading: isLoginLoading}] = useLoginMutation()


    const handleLogin = (posts: ILogin) => {
        login({...posts} as ILogin)
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className={classes.main}>
            <ModalWindow hashUrl={'login'} title={'Login'} visible={isModalVisible} setVisible={setIsModalVisible}>
                <Form create={handleLogin}/>
            </ModalWindow>
            <button onClick={showModal}  className={classes.text}>Вхід</button>
        </div>
    );
};
