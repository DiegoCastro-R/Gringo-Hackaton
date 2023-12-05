import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#0C326F',
  secondary: '#1351B4',
  background: '#F3F3F3',
  accent: '#FFC914',
  success: '#1B8231',
  darkBackground: 'black',
  buttonBackground: '#216E1F',
  white: 'white',
  textGrey: '#555'
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rawline', sans-serif;
    /* Add other global styles here */
  }
`;
