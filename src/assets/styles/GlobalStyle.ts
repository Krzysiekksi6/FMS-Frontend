import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

*,*::before,*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;

}
body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

a, button {
    font-family: 'Montserrat', sans-serif;
}
`;
