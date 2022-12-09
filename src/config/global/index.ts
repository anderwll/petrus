import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif !important;
    }

    body {
        width: 100vw;
        overflow-x: hidden !important;
    } 

    html {
        font-size: 62.5%; 
        scroll-behavior: smooth;
        scroll-padding-top: 9rem;
    }

    p {
        font-size: 1.8rem !important;
        font-weight: lighter !important;
    }

    a {
        font-size: 1.8rem !important;
        font-weight: lighter !important;
    }

    h2, h3, h4 {
        font-weight: bold !important;
    }

`;

export default GlobalStyle;