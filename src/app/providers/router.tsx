import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/root-layout'
import { AboutPage } from '../../pages/about-page'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found-page'
import { UserDetailsPage } from '../../pages/user-details-page'
import { UsersPage } from '../../pages/users-page'
import { UsersIntro } from '../../pages/users-page/users-intro'
import {ProfilePage} from '../../pages/profile/profile';
import {ProfileInfoPage} from '../../pages/user-info-page/user-info-page';
import {HomeWorkPage} from '../../pages/user-homework/user-homework-page';

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
                path:'users/:userId/profile',
                element: <ProfilePage/>,
                children:[
                    {
                        index:true,
                        element:<ProfileInfoPage/>
                    },
                    {
                        path: 'info',
                        element: <ProfileInfoPage/>
                    },
                    {
                        path: 'homeworks',
                        children: [ 
                            {
                                index: true,
                                element: <HomeWorkPage/>
                            },
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
