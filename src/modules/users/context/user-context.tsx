import { createContext } from "react"
import type { User } from '../types'

export interface UserContextType {
    users: User[]
    user: User | undefined
    getUserById: (id: string) => User | undefined
    getUsers: () => User[] | undefined
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
)