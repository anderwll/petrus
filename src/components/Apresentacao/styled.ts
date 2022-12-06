import styled from "styled-components";

const DivCarrousel = styled.div`
    z-index: 0;

    img {
        width: 100vw;
        height: 90vh;
        filter: brightness(50%)
    }


    h2 { 
        color: ${props => props.theme.secondary};
        margin: 2.5rem;
    }

    @media only screen and ( max-width: 480px) {
        h2  {
            font-size: 2rem;
        }
    } 
`;

export { DivCarrousel };