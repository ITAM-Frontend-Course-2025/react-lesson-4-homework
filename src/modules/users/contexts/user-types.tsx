import { createContext } from 'react'
import type {User,UserId} from '../types'

export interface UserContextType {
  users: User[]
  getUserById: (id: UserId) => User | null
  getUsers: () => User[]
}

export const UserContext = createContext<UserContextType | undefined>(undefined)
