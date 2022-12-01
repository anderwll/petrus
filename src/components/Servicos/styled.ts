import styled from "styled-components";

const DivServicos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 0 0 0;
    width: 80%;

    img {
        width: 28rem;
        height: 25rem;
    }

    h4 {
        margin: 2rem 0;
    } 

    @media screen and (max-width: 1080px) {
        width: 90%;

        img {
            width: 24rem;
        }
    }

    @media screen and (max-width: 900px) {
        width: 50%;

        img {
            width: 32rem;
        }
    }
`;

const DivTextS = styled.div`
    display: flex;
    justify-content: center;

    p {
        font-size: 1.5rem;
        width: 80%;
        text-align: justify;
        margin-bottom: 4rem;
    }   
`;

export { DivServicos, DivTextS };