export type User = {
    id: string
    name: string
    role: 'student' | 'mentor'
    favouriteModule: string
    dz1:string
    mark?:number
    avatar:string
}

export type UserId = string
