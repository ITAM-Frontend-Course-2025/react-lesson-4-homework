import type { ReactNode } from 'react'
import { UserContext } from './user-types'
import type {User,UserId} from '../types'


type UserProviderProps = {
    children : ReactNode
}

export function UserProvider({children}:UserProviderProps){
    
    const users:User[]=[
        {
            id:'1',
            name: 'Алиса',
            role: 'student',
            favouriteModule: 'React Router',
            dz1: 'сделано!',
            mark:5,
            avatar:'alisa.jpg',
        },
        {
            id: '2',
            name: 'Борис',
            role: 'student',
            favouriteModule: 'State Management',
            dz1:  'не сдано (',
            mark: 2,
            avatar:'boris.jpg'
        },
        {
            id: '3',
            name: 'Елена',
            role: 'mentor',
            favouriteModule: 'TypeScript',
            dz1: 'на проверке',
            avatar:'elena.jpg'
        },
    ]

    const getUserById = (id: UserId): User | null => {
        return users.find(user => user.id === id) || null
    }

    const getUsers = (): User[] => {
        return users
    }

    return (
        <UserContext.Provider value={{ users, getUserById, getUsers }}>
            {children}
        </UserContext.Provider>
    )
}