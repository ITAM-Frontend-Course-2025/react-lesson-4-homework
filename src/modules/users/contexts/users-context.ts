import { createContext } from "react";
import { type User, type UserId } from "../types";

export type UsersContextType = {
    users: User[];
    getUsers: () => User[];
    getUserById: (id: UserId) => User | null; 
};

export const UsersContext = createContext<UsersContextType | undefined>(
    undefined
);