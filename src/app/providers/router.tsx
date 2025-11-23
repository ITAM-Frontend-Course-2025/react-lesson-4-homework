import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/root-layout'
import { AboutPage } from '../../pages/about-page'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found-page'
import { UserDetailsPage } from '../../pages/user-details-page'
import { UsersPage } from '../../pages/users-page'
import { UsersIntro } from '../../pages/users-page/users-intro'
import { UserProfilePage } from '../../pages/profile-page'
import { InfoTab } from '../../pages/profile-page/info-tab'
import { HomeworksTab } from '../../pages/profile-page/homeworks-tab'
import { ProfileIntro } from '../../pages/profile-page/profile-intro'

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
                    {
                        path: ':userId/profile',
                        element: <UserProfilePage />,
                        children: [
                            {
                                index: true,
                                element: <ProfileIntro />,
                            },
                            {
                                path: 'info',
                                element: <InfoTab />,
                            },
                            {
                                path: 'homeworks',
                                element: <HomeworksTab />,
                            },
                        ]
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
