import styled from "styled-components";

const DivButtonFloating = styled.div`
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 2rem;
    margin-bottom: 2rem;
    z-index: 999;

    a {
        background-color: #26256b;
        color: #fff;
    }

    a:hover {
        background-color: #fed406;
        color: #000;
    }

    svg {
        font-size: 3rem;
    }

`;

export { DivButtonFloating };