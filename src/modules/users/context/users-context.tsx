import { createContext}from "react";
import type {User,  UserId} from '../types'

export type UserType = {
    users: User[],
    getUsers:()=>User[]
    getUserById:(id: UserId)=>User | null,
    
}

export const UserType = createContext<UserType |undefined>(undefined)