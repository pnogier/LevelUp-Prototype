import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      light: '#f565',
      main: '#fff',
      dark: '#000',
      contrastText: "#000"
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      dark: '#005562',
      contrastText: '#ffcc00',
    },
  }
});