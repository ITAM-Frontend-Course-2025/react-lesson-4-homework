import { createContext } from "react";
import type { User, UserId } from '../types'

export type UserContextType = {
    users: User[],
    getUsers: () => User[],
    getUserById: (id: UserId) => User | null,
}

export const UsersContext = createContext<UserContextType | undefined>(undefined)