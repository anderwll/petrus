import styled from "styled-components";

const DivEquipe = styled.div`
    width: 60%; 
    padding: 10rem 0 10rem 0;
    
    h5 {
        margin: 4rem 0;
    }

    p {
        font-size: 1.5rem;
        text-align: justify;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const ImgPerfil = styled.img`
    width: 80%;
    height: 40rem;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const DivSociais = styled.div`
    display: flex;
    justify-content: left;
    width: auto;

`;

export { DivEquipe, ImgPerfil, DivSociais };