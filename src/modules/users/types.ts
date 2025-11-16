export type User = {
    id: string
    name: string
    role: 'student' | 'mentor'
    favouriteModule: string
    course?: number;
    homeworks?: Homework[]|undefined
}

export type UserId = string

export type Homework = {
  title: string
  status: 'completed' | 'in-progress' | 'not-started'
}