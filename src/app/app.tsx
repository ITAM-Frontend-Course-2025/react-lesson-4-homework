import { RouterProvider } from 'react-router-dom'
import { appRouter } from './providers/router'
import { UsersProvider } from '../modules/users/context/users-provider.tsx'

export function App() {
    return (
        <UsersProvider>
            <RouterProvider router={appRouter} />
        </UsersProvider>
    )
}
