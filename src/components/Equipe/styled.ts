import styled from "styled-components";

const DivEquipe = styled.div`
    width: 70vw; 
    padding: 10rem 0 10rem 0;
    
    h5 {
        margin: 2rem 0;
    }

    p {
        font-size: ${props => props.theme.fontSize};
        text-align: justify;
    }

    @media screen and (max-width: 1536px) {
        width: 80vw;
    }

    @media screen and (max-width: 1200px) {
        width: 90vw;
    }

    @media screen and (max-width: 900px) {
        width: 100vw;
        text-align: center !important;
    }   
`;

const ImgPerfil = styled.img`
    height: 38rem;

    @media screen and (max-width: 900px) {
        height: 32rem;
    }
`;

const DivSociais = styled.div`
    a:hover {
        color: #090979;
    }

`;

export { DivEquipe, ImgPerfil, DivSociais };