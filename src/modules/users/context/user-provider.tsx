import { useState, type ReactNode, useEffect } from 'react'
import { UserContext } from './user-context'
import type { User } from '../types'
import { getUsers, getUserById } from '../api'

type UserProviderProps = {
    children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [users, setUsers] = useState<User[]>([])
    const [user, setCurrentUser] = useState<User | undefined>()

    useEffect(() => {
        const loadUsers = async () => {
            const list = await getUsers()
            setUsers(list)
        }

        loadUsers()
    }, [])

    const findUserById = (id: string) => {
        return users.find(user => user.id === id)
    }

    const getUsersLocal = () => users

    return (
        <UserContext.Provider value={{ user, users, getUserById: findUserById, getUsers: getUsersLocal }}>
            {children}
        </UserContext.Provider>
    )
}