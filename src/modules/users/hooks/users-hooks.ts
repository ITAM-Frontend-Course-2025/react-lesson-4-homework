import { useContext } from "react";
import { UsersContext } from "../context/users-context"; // ← исправлен импорт

export const useUsersContext = () => { // ← переименован хук (use- префикс)
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error('useUsersContext must be used within UsersProvider');
    }
    return context;
}