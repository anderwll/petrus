import styled from "styled-components";

interface DivImgProps {
    bgImage: string
}

const DivCarrousel = styled.div`
    h2 { 
        color: ${props => props.theme.secondary};
        margin-bottom: 2rem;
    }

    h4 { 
        color: ${props => props.theme.secondary};
        margin-bottom: 5rem;
    }

    @media only screen and ( max-width: 480px) {
       
        h2 {
            font-size: 2rem;
        }

        h4 {
            font-size: 1.6rem;
        }
    } 
    
`;

const DivImg = styled.div<DivImgProps>`
    width: 100%;
    height: 95vh;
    filter: brightness(45%);
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;

`

export { DivCarrousel, DivImg };