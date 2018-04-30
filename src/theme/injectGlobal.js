import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    body{
      padding: 0;
      margin: 0;
      font-family: sans-serif;
    }

    h1 {
      font-family: Montserrat;
    }
`

export const theme = {
  primary: '#6e27c5'
}

export const theme1 = {
  primary: '#fddd78',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222'
}

export const theme2 = {
  primary: '#6e27c5',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222'
}
