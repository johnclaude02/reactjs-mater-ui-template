import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
  navList: {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    overflowY: 'auto',
  },
  listItem: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    overflowY: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowY: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  subHeader: {
    padding: '20px 0px',
    textAlign: 'center',
    whiteSpace: 'normal',
    position: 'inherit',
    overflowY: 'auto',
  },
  brand: {
    left: '20px',
    padding: '10px',
    marginBottom: '0px',
    position: 'absolute',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
}));