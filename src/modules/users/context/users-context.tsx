import { createContext } from "react";
import type { User, UserId } from '../types'

export type UserContextType = {
    users: User[],
    getUsers: () => User[],
    getUserById: (id: UserId) => User | null,
}

// Экспортируем константу контекста
export const UsersContext = createContext<UserContextType | undefined>(undefined)