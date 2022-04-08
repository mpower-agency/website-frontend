import { createTheme } from '@mui/material/styles';

const MainTheme = createTheme({
  status: {
    danger: '#f50057',
  },
  palette: {
    primary: {
      main: '#8bc34a',
      darker: '#424242',
      divider:'#424242' 
    },
    neutral: {
      main: '#424242',
      contrastText: '#fff',
    },
  },
});

export default MainTheme;