import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/root-layout'
import { AboutPage } from '../../pages/about-page'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found-page'
import { UserDetailsPage } from '../../pages/user-details-page'
import { UsersPage } from '../../pages/users-page'
import { UsersIntro } from '../../pages/users-page/users-intro'
import { ProfilePage } from '../../pages/profile-page/profile-page'
import { ProfileInfoPage } from '../../pages/profile-info-page/profile-info-page'
import { ProfileHomeworksPage } from '../../pages/profile-homeworks-page/profile-homeworks-page'
import { MessagePage } from '../../pages/message-page/message-page'

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
                element: <ProfilePage />,
                children: [
                    {
                        index: true,
                        element: <ProfileInfoPage />
                    },
                    {
                        path: 'info',
                        element: <ProfileInfoPage />
                    },
                    {
                        path: 'homeworks',
                        children: [ 
                            {
                                index: true,
                                element: <ProfileHomeworksPage />
                            },
                            {
                                path: 'message', 
                                element: <MessagePage />
                            }
                        ]
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])