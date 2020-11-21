import React from 'react';

const Dashboard = React.lazy(() => import('./components/pages/Dashboard/Dashboard'));
const UserManagement = React.lazy(() => import('./components/pages/UserManagement/Users'))
const OperatorGroup = React.lazy(() => import('./components/pages/OperatorGroup/OperatorsList'));
const OutletManagement = React.lazy(() => import('./components/pages/OutletManagement/OultletsList'));

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
    path: '/outlet-management',
    name: 'OutletManagement',
    component: OutletManagement
  },
  {
    exact: true,
    path: '*',
    name: '/404',
    component: () => <h1>Not Found.</h1>
  }
];

export default routes;