import React from 'react';

const Dashboard = React.lazy(() => import('./components/pages/Dashboard/Dashboard'));
const UserManagement = React.lazy(() => import('./components/pages/UserManagement/Users'))
const OperatorGroup = React.lazy(() => import('./components/pages/OperatorGroup/Operators'));
const Outlets = React.lazy(() => import('./components/pages/OutletManagement/Outlets/Outlets'));
const Terminals = React.lazy(() => import('./components/pages/OutletManagement/Terminals/Terminals'))

const routes = [
  {
    exact: true,
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    exact: true,
    path: '/user-management',
    name: 'UserManagement',
    component: UserManagement
  },
  {
    exact: true,
    path: '/operator-group',
    name: 'OperatorGroup',
    component: OperatorGroup
  },
  {
    exact: true,
    path: '/outlet-management/outlets',
    name: 'Outlets',
    component: Outlets
  },
  {
    exact: true,
    path: '/outlet-management/terminals',
    name: 'Terminals',
    component: Terminals
  },
  {
    path: '*',
    name: '/404',
    component: () => <h1>Not Found.</h1>
  }
];

export default routes;