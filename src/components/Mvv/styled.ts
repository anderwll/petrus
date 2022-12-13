import styled from "styled-components";

const DivText = styled.div`
    width: 70%;
    padding: 10rem;
    background: linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(254,212,6,0.4990371148459384) 100%);
    box-shadow: ${props => props.theme.boxShadow};
    text-align: justify;

    h2 {
        margin-top: 0 !important;
        margin-bottom: 4rem !important;
    }

    h4 {
        margin: 2rem 0 !important;
    }
       
    p {
        margin-top: 2.5rem;
        color: ${props => props.theme.primary};
    }

    @media screen and (max-width:1536px) {
        width: 80%;
        padding: 6rem;
    }

    @media screen and (max-width: 900px) {
        width: 90%;
        padding: 4rem;
       
    }
`;

export { DivText };