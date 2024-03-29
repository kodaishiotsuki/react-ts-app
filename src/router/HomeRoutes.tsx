import { Home } from 'components/pages/Home'
import { Page404 } from 'components/pages/Page404'
import { Setting } from 'components/pages/Setting'
import { AllCompany } from 'components/pages/AllCompany'

export const homeRoute = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/all_company',
    exact: false,
    children: <AllCompany />,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]
