import styled from "styled-components";

const DivText = styled.div`
    width: 60%;
    padding: 10rem;
    background-color: rgba(255, 255, 255, 0.432);
    box-shadow: ${props => props.theme.boxShadow};
    backdrop-filter: blur(1rem);
    text-align: justify;

    h2 {
        margin-top: 0 !important;
        margin-bottom: 4rem !important;
    }
       
    p {
        margin-top: 2.5rem;
        font-size: ${props => props.theme.fontSize};
        color: ${props => props.theme.primary};
    }

    @media screen and (max-width:1200px) {
        width: 80%;
        padding: 6rem;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 4rem;
       
    }
`;

export { DivText };