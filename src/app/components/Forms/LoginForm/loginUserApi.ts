export const loginUserApi = async (email: string, password: string): Promise<void> => {

    try {
        const response = await fetch('http://localhost:9422/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
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
