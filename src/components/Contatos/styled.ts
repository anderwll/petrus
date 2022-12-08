import styled from "styled-components";

const DivContatos = styled.div`
    background-color: ${props => props.theme.bgPrimary};
    box-shadow: ${props => props.theme.boxShadow};
    backdrop-filter: blur(0.5rem);
    padding: 2.5rem;
    width: 99%;
    p {
        font-size: ${props => props.theme.fontSize};
        color: ${props => props.theme.primary}
    }

    svg {
        font-size: 5rem;
    }
`;

const DivSociais = styled.div`
    svg {
            font-size: 2.5rem;
    } 

`;

const Links = styled.a`
    text-decoration: none;
    font-size: 2rem;
    margin: 2rem 1rem;
    color: #333;

    &:hover {
        color: #fff;
    }
`;

export { DivContatos, DivSociais, Links };