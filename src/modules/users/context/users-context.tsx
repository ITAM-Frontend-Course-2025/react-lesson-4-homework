import {createContext} from 'react'
import type {User, UserId} from '../types'

export type UserContextType = {
    users: User[];
    getUserById: (id: UserId) => User|null;
    getUsers:() => User[];
}

export const UsersContext = createContext<UserContextType|undefined>(
    undefined
)