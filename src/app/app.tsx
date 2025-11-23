import { RouterProvider } from 'react-router-dom'
import { appRouter } from './providers/router'
import { UserProvider } from '../modules/users/context/user-provider'

export function App() {
    return (
        <UserProvider>
            <RouterProvider router={appRouter} />
        </UserProvider>
    )
}
