import React, {FC, useState, MouseEvent, ChangeEvent} from 'react';
import {ILogin} from "@/app/types/IAuth";
import {Button} from "@/app/UI";

interface IForm {
    create: any
}

export const Form:FC<IForm> = ({create}) => {

    const [login, setLogin] = useState({email: 'root@dgmail.com', password: '12345678'});

    const handleLogin =  (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const AALogin = {
            ...login as ILogin
        }
        create(AALogin)
        // setLogin({email: '', password: ''})
    }

    return (
        <form action="#">
            <input
                value={login.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin({...login, email: e.target.value})}
                type="text"
                placeholder="email"
            />
            <input
                value={login.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin({...login, password: e.target.value})}
                type="text"
                placeholder="password"
            />
            <Button text={'Create'} onClick={handleLogin}/>
        </form>
    );
};
