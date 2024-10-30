export type User={
    name:string,
    password:string,
    email:string,
    last_name:string,
    avatar?:string,
}
export type UserInput = Pick<User,'email' | 'password'>