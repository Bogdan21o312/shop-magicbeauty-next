import React, { useState } from 'react';

const loginUser = async (email: string, password: string): Promise<void> => {

    try {
        const response = await fetch('http://localhost:9422/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.accessToken;

            localStorage.setItem('token', token);
        } else {
            console.error('Помилка логіну:', response.statusText);
        }
    } catch (error) {
        console.error('Помилка логіну:', error);
    }
};

export const Form: React.FC = () => {

    const [email, setEmail] = useState('root@dgmail.com');
    const [password, setPassword] = useState('12345678');

    const handleLogin = (): void => {
        loginUser(email, password);
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Електронна пошта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Увійти</button>
        </div>
    );
};
