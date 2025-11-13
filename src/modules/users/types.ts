export type User = {
    id: string
    name: string
    role: 'student' | 'mentor'
    favouriteModule: string
    experience: string
    mockInformation: string
    homeworkHasDone: string
    level: 'hacker' | 'pro' | 'noob'
}

export type UserId = string
