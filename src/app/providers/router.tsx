import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/root-layout'
import { AboutPage } from '../../pages/about-page'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found-page'
import { UserDetailsPage } from '../../pages/user-details-page'
import { UsersPage } from '../../pages/users-page'
import { UsersIntro } from '../../pages/users-page/users-intro'
import { UserProfilePage } from '../../pages/user-profile-page/user-profile-page'
import { ProfileInfo } from '../../pages/profile-info-page/profile-info-page'
import { ProfileHomeworks } from '../../pages/profile-homeworks-page/profile-homeworks-page'

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    {
                        index: true,
                        element: <UsersIntro />,
                    },
                    {
                        path: ':userId',
                        element: <UserDetailsPage />,
                    },
                ],
            },
            {
                path: 'users/:userId/profile',
                element: <UserProfilePage />,
                children: [
                    {
                        index: true,                    // ← ДОБАВИТЬ index маршрут
                        element: <ProfileInfo />,
                    },
                    {
                        path: 'info',
                        element: <ProfileInfo />,
                    },
                    {
                        path: 'homeworks',
                        element: <ProfileHomeworks />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])
