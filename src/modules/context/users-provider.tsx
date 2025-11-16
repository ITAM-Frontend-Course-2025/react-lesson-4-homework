import { UsersContext } from '../../modules/users/context/users-context'
import type {ReactNode} from 'react'
import { getUsers, getUserById } from '../../modules/users'


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