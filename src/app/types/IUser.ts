interface History {
    timestamp: string;
    before: {
        _id: string;
        email: string;
        password: string;
        banned: boolean;
        name: string;
        surname: string;
        created_at: string;
        __v: number;
        phone_number?: string;
    };
    after: {
        _id: string;
        email: string;
        password: string;
        banned: boolean;
        name: string;
        surname: string;
        created_at: string;
        __v: number;
        phone_number: string;
    };
    _id: string;
}

export interface IUser {
    _id?: string;
    email: string;
    password: string;
    banned?: boolean;
    name: string;
    surname: string;
    created_at?: string;
    history?: History[];
    __v?: number;
    phone_number?: string;
}
