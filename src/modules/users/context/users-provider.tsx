import { UsersContext } from './users-context.tsx'
import type { ReactNode } from 'react'
import type { User, UserId } from '../index.ts'

type UsersProviderProps = {
    children: ReactNode
}

export const UsersProvider = (props: UsersProviderProps) => {
    const { children } = props


    /** Mock users */
    const users: User[] = [
        {
            id: '1',
            name: 'Алиса',
            role: 'student',
            favouriteModule: 'React Router',
            experience: '1 year',
            mockInformation: 'some mock text',
            homeworkHasDone: '0',
            level: 'noob'
        },
        {
            id: '2',
            name: 'Борис',
            role: 'student',
            favouriteModule: 'State Management',
            experience: '3 month',
            mockInformation: 'some mock text',
            homeworkHasDone: '2',
            level: 'pro',
        },
        {
            id: '3',
            name: 'Елена',
            role: 'mentor',
            favouriteModule: 'TypeScript',
            experience: '5 years',
            mockInformation: 'some mock text',
            homeworkHasDone: '10',
            level: 'hacker',
        },
    ]

    /** Mock api request */
    function getUsers(): User[] {
        return users
    }

    /** Mock api request */
    function getUserById(id: UserId): User | null {
        const foundedUser = users.find((user) => user.id === id)

        if (foundedUser === undefined) {
            return null
        }

        return foundedUser
    }

    return (
        <UsersContext.Provider value={{users, getUsers, getUserById}}>
            {children}
        </UsersContext.Provider>
    )
}