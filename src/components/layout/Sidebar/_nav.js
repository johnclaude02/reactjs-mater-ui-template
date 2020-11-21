import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SettingsRemoteOutlinedIcon from '@material-ui/icons/SettingsRemoteOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

const navigation = [
  {
    _tag: 'SidebarNavItem',
    name: 'Dashboard',
    label: 'Dashboard',
    link: '/',
    icon: DashboardOutlinedIcon,
    children: []
  },
  {
    _tag: 'SidebarNavItem',
    name: 'UserManagement',
    label: 'User Management',
    link: '/user-management',
    icon: GroupOutlinedIcon,
    children: []
  },
  {
    _tag: 'SidebarNavItem',
    name: 'OperatorGroup',
    label: 'Operator Group',
    link: '/operator-group',
    icon: SettingsRemoteOutlinedIcon,
    children: []
  },
  {
    _tag: 'SidebarNavItem',
    name: 'OutletManagement',
    label: 'Outlet Management',
    link: "",
    icon: TurnedInNotOutlinedIcon,
    children: [
      {
        _tag: 'SidebarSubNavItem',
        name: 'OutletsList',
        label: 'Outlets',
        link: '/outlet-management/outlets'
      },
      {
        _tag: 'SidebarSubNavItem',
        name: 'TerminalsList',
        label: 'Terminals',
        link: '/outlet-management/terminals'
      }
    ]
  }
];

export default navigation;