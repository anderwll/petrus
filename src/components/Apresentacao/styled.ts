import styled from "styled-components";

const DivCarrousel = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;

    img {
        width: 100vw;
        height: 90vh;
        filter: brightness(45%)
    }
    
    h2 { 
        color: ${props => props.theme.secondary};
        margin: 5rem;
    }

    @media only screen and ( max-width: 480px) {
        h2  {
            font-size: 2rem;
        }
    } 
`;

export { DivCarrousel };