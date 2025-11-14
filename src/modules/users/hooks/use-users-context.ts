import { useContext } from "react";
import { UsersContext } from "../contexts/users-context";

export const useUsersContext = () => {
    const context = useContext(UsersContext);

    if (!context) {
        throw new Error('useUserContext must be used within UserProvider');
    }

    return context;
};