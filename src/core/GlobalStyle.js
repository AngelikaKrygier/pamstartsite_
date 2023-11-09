import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    /* display: grid;
    justify-content: end;
    align-items: end; */
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
body {
  font-family: 'Lato', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'Poppins', sans-serif;
  width: 700px;
};
`;
