export type User = {
    id: UserId
    name: string
    role: 'student' | 'mentor'
    favouriteModule: string
}

export type UserId = string
