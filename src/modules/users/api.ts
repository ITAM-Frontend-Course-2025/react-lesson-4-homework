import type { User, UserId } from './types'

/** Mock users */
const users: User[] = [
    {
        id: '1',
        name: 'Алиса',
        role: 'student',
        favouriteModule: 'React Router',
        course: 2,
        homeworks: [
      { title: 'ДЗ №1: JSX', status: 'completed' },
      { title: 'ДЗ №2: Кастомные хуки. React Context', status: 'completed' },
      { title: 'ДЗ №3: Routing на React Router v7', status: 'completed' },
    ]
    },
    {
        id: '2',
        name: 'Борис',
        role: 'student',
        favouriteModule: 'State Management',
        course: 1,
        homeworks: [
      { title: 'ДЗ №1: JSX', status: 'completed' },
      { title: 'ДЗ №2: Кастомные хуки. React Context', status: 'in-progress' },
      { title: 'ДЗ №3: Routing на React Router v7', status: 'not-started' },
    ]
    },
    {
        id: '3',
        name: 'Елена',
        role: 'mentor',
        favouriteModule: 'TypeScript',
        course: 4
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
