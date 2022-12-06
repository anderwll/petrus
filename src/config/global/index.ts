import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif !important;
    }

    body {
        width: 100vw;
        overflow-x: hidden !important;
    } 

    body::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background-color: #707070;
    }

    body::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 0.5rem;
    }

    html {
        font-size: 62.5%; 
        scroll-behavior: smooth;
        scroll-padding-top: 9rem;
    }

    p {
        font-size: 1.8rem !important;
    }

    a {
        font-size: 1.8rem !important;
    }

`;

export default GlobalStyle;