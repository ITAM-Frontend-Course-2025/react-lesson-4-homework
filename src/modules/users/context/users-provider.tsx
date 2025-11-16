import type { ReactNode } from "react";
import { UserType } from "./users-context";
import {getUsers, getUserById} from '../api';
type UsersProviderProps = {
    children:ReactNode
}
export function UsersProvider ({children} : UsersProviderProps){
    const users =getUsers()
    return (
        <UserType.Provider value={{users, getUsers, getUserById}}>{children}</UserType.Provider>
    )
};