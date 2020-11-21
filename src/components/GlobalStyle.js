import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: '14px',
      },
    },
  },
});

export default theme;