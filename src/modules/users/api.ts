import type { User, UserId } from './types'

/** Mock users */
const users: User[] = [
    {
        id: '1',
        name: 'Алиса',
        role: 'student',
        favouriteModule: 'React Router',
        info: 'Ну-у-у о-о-очень хорошая студентка.',
        homeworkName: 'React: ДЗ №4',
        homeworkDescription: 'Расширьте учебное приложение и реализуйте сценарии с вложенными маршрутами, редиректами и защитой страниц.',
        homeworkStatus: 'complete'
    },
    {
        id: '2',
        name: 'Борис',
        role: 'student',
        favouriteModule: 'Axios',
        info: 'Вообще суперский челик.',
        homeworkName: 'React: ДЗ №5',
        homeworkDescription: 'Реализуйте по REST GET, POST, PATCH и DELETE запросы к серверу.',
        homeworkStatus: 'incomplete'
    },
    {
        id: '3',
        name: 'Елена',
        role: 'mentor',
        favouriteModule: 'TypeScript',
        info: 'Самый лучший преподаватель.'
    },
    {
        id: '4',
        name: 'Илья',
        role: 'student',
        favouriteModule: 'CSS',
        info: 'Надёжный и добрый товарищ. Я б с ним в разведку пошёл.',
        homeworkName: 'Vanilla: ДЗ №2',
        homeworkDescription: 'Стилизуйте свой сайт-визитку с помощью CSS.',
        homeworkStatus: 'complete'
    },
    {
        id: '5',
        name: 'Дмитрий',
        role: 'mentor',
        favouriteModule: 'Svelte & SvelteKit',
        info: 'Ультрамегасупердуперхороший преподаватель по Svelte.'
    }
]

/** Mock api request */
export function getUsers(): User[] {
    return users
}

/** Mock api request */
export function getUserById(id: UserId): User | null {
    const foundUser = users.find((user) => user.id === id)

    if (foundUser === undefined) {
        return null
    }

    return foundUser
}
