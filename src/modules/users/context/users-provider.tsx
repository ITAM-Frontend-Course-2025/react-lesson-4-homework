import type { ReactNode } from "react";
import { UsersContext } from "./users-context"; // ← исправлен импорт
import { getUsers, getUserById } from '../api';

type UsersProviderProps = {
    children: ReactNode
}

export function UsersProvider({ children }: UsersProviderProps) {
    const users = getUsers()
    return (
        <UsersContext.Provider value={{ users, getUsers, getUserById }}>
            {children}
        </UsersContext.Provider>
    )
};