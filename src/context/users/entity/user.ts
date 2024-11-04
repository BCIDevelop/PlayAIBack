import { ObjectId, Types } from "mongoose"

export type User={
    _id?:Types.ObjectId,
    name:string,
    password:string,
    email:string,
    last_name:string,
    avatar?:string | undefined | null,
    active_status? : boolean
}
export type UserInput = Pick<User,'email' | 'password'>