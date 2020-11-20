import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appFooter: {
    height: '50px',
    backgroundColor: '#e8e8e84a',
    borderTop: '1px solid #e7e7e7',
    padding: '10px 20px',
    position: 'absolute',
    width: 'auto',
    right: 0,
    left: 0,
  },
  title: {
    display: 'inline-block',
    float: 'right',
  }
}));