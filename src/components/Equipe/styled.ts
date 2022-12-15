import styled from "styled-components";

const DivEquipe = styled.div`
    width: 70%; 
    padding: 10rem 0 10rem 0;
    
    h5 {
        margin: 2rem 0;
    }

    p {
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

const Links = styled.a`
    position: absolute;
    opacity: 0;
    z-index: 1;
    width: auto;
    height: 38rem;
    padding: 16.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.8s;
    color: ${props => props.theme.secondary} !important;

    @media screen and ( max-width: 900px ) {
        height: 32rem;
        padding: 13.5rem;
    }

    svg {
        font-size: 5rem;
    }

    &:hover {
        opacity: 1;
    }
`;

const ImgPerfil = styled.img`
    height: 38rem;

    @media screen and (max-width: 900px) {
        height: 32rem;
    }
`;

const DivSociais = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    svg {
        font-size: 3rem;
    }

    a {
        color: ${props => props.theme.blue};  
    }

    a:hover {
        color: ${props => props.theme.yellow};
    }
`;

export { DivEquipe, ImgPerfil, DivSociais, Links };