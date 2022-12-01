import styled from "styled-components";

const DivContatos = styled.div`
    display: flex; 
    justify-content: center ;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
    height: 45vh;
    padding: 4rem;
    gap: 1rem;

    h4 {
        font-size: 4rem;
        color: #333;
    }

    h6 {
        font-size: 3rem;
        color: #333;

    }

    p {
        font-size: 2rem;
        color: #333;

    }
`;

const DivSociais = styled.div``;

const Links = styled.a`
    text-decoration: none;
    font-size: 2rem;
    margin: 2rem 1rem;
    color: #333;

    svg {
        font-size: 2.5rem;
    } 

    &:hover {
        color: #fff;
    }
`;

export { DivContatos, DivSociais, Links };