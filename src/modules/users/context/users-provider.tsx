import { UsersContext } from './users-context'
import type {ReactNode} from 'react'
import { getUsers, getUserById } from '..'


type UsersProviderProps = {
    children: ReactNode
}

export function UsersProvider({children}:UsersProviderProps) {
    const users = getUsers()
    return (
          <UsersContext.Provider value={{ users, getUsers, getUserById }}>
            {children}
        </UsersContext.Provider>
    )
}