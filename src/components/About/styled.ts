import styled from "styled-components";

const DivText = styled.div`
    width: 60%;
    padding: 2rem 5rem;
    background-color: ${props => props.theme.bgPrimary};
    box-shadow: ${props => props.theme.boxShadow};
    backdrop-filter: blur(2rem);
    text-align: justify;
       
    p {
        margin-top: 2.5rem;
        font-size: ${props => props.theme.fontSize};
        color: ${props => props.theme.primary};
    }

    @media screen and (max-width:900px) {
        width: 80%;
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0 2rem;
    }
`;

export { DivText };