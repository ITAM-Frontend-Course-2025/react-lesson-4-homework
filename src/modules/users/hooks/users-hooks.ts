import {useContext} from "react";
import { UserType } from "../context/users-context";
export const UsersContext=()=>{
    const context = useContext(UserType);
    if (!context){
        throw new Error('No no no mr. fish must be used within UserProvider');
    }
    return context;
}