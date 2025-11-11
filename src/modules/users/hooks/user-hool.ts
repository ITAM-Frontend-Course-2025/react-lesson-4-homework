import { useContext } from "react";
import { UserContext } from "../contexts/user-types";


export function useUsers(){

    const context = useContext(UserContext)

    if (context===undefined){
        throw new Error('error from uder-hook')
    }
    
    return context
}