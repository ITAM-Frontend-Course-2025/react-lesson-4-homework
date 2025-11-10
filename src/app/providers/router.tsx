import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/root-layout'
import { AboutPage } from '../../pages/about-page'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found-page'
import { UserDetailsPage } from '../../pages/user-details-page'
import { UsersPage } from '../../pages/users-page'
import { UsersIntro } from '../../pages/users-page/users-intro'
import UserProfilePage from '../../pages/user-profile-page/UserProfilePage'
import UserInfoPage from '../../pages/user-info-page/UserInfoPage'
import UserHomeWorkPage from '../../pages/user-homework-page/UserHomeWorkPage'

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
                        children:[
                            {
                                path: 'profile',
                                element: <UserProfilePage/>,
                                children:[
                                    {
                                        index:true,
                                        element: <UserInfoPage/>
                                    },
                                    {
                                        path: 'homework',
                                        element: <UserHomeWorkPage/>
                                    }
                                ]
                            }
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
