import { useContext } from 'react'
import { UsersContext } from '../users/context'

export const useUsersContext = () => {
    const context = useContext(UsersContext)

    if (!context) {
        throw new Error('useUsersContext must be used within the context')
    }

    return context
}
