import type { User, UserId } from './types'

/** Mock users */
export const users: User[] = [
    {
        id: '1',
        name: 'Алиса',
        role: 'student',
        favouriteModule: 'React Router',
    },
    {
        id: '2',
        name: 'Борис',
        role: 'student',
        favouriteModule: 'State Management',
    },
    {
        id: '3',
        name: 'Елена',
        role: 'mentor',
        favouriteModule: 'TypeScript',
    },
]

/** Mock api request */
export function getUsers(): User[] {
    return users
}

/** Mock api request */
export function getUserById(id: UserId): User | null {
    const foundedUser = users.find((user) => user.id === id)

    if (foundedUser === undefined) {
        return null
    }

    return foundedUser
}
