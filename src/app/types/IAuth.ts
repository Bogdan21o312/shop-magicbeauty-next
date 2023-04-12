export interface ILogin {
    email: string
    password: string
    accessToken?: string
}

export interface IRegister {
    email: string
    password: string
    banned: boolean
    banReason: string
    name: string
    surname: string
    phone_number: string
}
