import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SettingsRemoteOutlinedIcon from '@material-ui/icons/SettingsRemoteOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

export const navigation = [
  {
    _tag: 'SidebarNavItem',
    name: 'Dashboard',
    label: 'Dashboard',
    to: '/',
    icon: DashboardOutlinedIcon,
    children: []
  },
  {
    _tag: 'SidebarNavItem',
    name: 'UserManagement',
    label: 'User Management',
    to: '/user-management',
    icon: GroupOutlinedIcon,
    children: []
  },
  {
    _tag: 'SidebarNavItem',
    name: 'OperatorGroup',
    label: 'Operator Group',
    to: '/operator-group',
    icon: SettingsRemoteOutlinedIcon,
    children: []
  },
  {
    _tag: 'SidebarNavItem',
    name: 'OutletManagement',
    label: 'Outlet Management',
    to: null,
    icon: TurnedInNotOutlinedIcon,
    children: [
      {
        _tag: 'SidebarSubNavItem',
        name: 'OutletsList',
        label: 'Outlets',
        to: '/outlet-management/outlets'
      },
      {
        _tag: 'SidebarSubNavItem',
        name: 'TerminalsList',
        label: 'Terminals',
        to: '/outlet-management/terminals'
      }
    ]
  }
];