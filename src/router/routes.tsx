import Home from '@pages/home/Home'
import LogIn from '@pages/login/LogIn'
import NotFound from '@pages/notFound/NotFound'

import { RouteObject } from 'react-router-dom'

import { PrivatePagesGuard, PublicPagesGuard } from './middleware'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    loader: PrivatePagesGuard,
  },
  {
    path: '/login',
    loader: PublicPagesGuard,
    element: <LogIn />,
    errorElement: <NotFound />,
  },
]

export default routes