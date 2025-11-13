import { createContext } from 'react'
import type { User } from '../types.ts'


export type UsersContextType = {
    users: Array<object>
    getUsers: () => void
    getUserById: (id: string) => User | null
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined)