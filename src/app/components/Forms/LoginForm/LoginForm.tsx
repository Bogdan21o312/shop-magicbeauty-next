import React, {ChangeEvent, FC, useState} from 'react';
import {useToggleModel} from "@/app/hooks";
import {LOGIN_POPUP} from "@/app/routes";
import {useRouter} from "next/router";
import {Button, Input} from "@/app/UI";
import {loginUserApi} from "@/app/components/Forms/LoginForm/loginUserApi";

export const LoginForm: FC = () => {
    const {handleHideModal} = useToggleModel(LOGIN_POPUP);
    const {reload} = useRouter()

    const [email, setEmail] = useState('root@dgmail.com');
    const [password, setPassword] = useState('12345678');

    const handleLogin = (): void => {
        loginUserApi(email, password);
        handleHideModal()
        setTimeout(() => {
            reload()
        }, 300)
    };

    function handleInputEmailChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleInputPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }


    return (
        <form>
            <Input
                type="email"
                placeholder="Електронна пошта"
                value={email}
                onChange={handleInputEmailChange}
            />
            <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handleInputPasswordChange}
            />
            <Button border widthHundredPercent onClick={handleLogin} text={'Увійти'}/>
        </form>
    );
};
