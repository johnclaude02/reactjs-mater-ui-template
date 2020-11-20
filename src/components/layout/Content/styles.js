import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
  content: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    right: 0,
    position: 'absolute',
    top: '65px',
    padding: theme.spacing(3),
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: '#e8e8e84a',
  },
  longerContent: {
    width: `calc(100% - 76px)`,
  },
  shorterContent: {
    width: `calc(100% - ${drawerWidth}px)`,
  }
}));