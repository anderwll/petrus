import styled from "styled-components";

const SectionContatos = styled.div`
    position: relative;
    display: flex; 
    justify-content: center;
    width: 100vw;
    height: 40vh;
    //background: #fed406;
    background: #26256b;
`;


const DivContatos = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 40vh;
    bottom: 8vh;
    //background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(38,37,107,1) 85%);
    background: linear-gradient(180deg, rgba(255,255,255,0.9710259103641457) 0%, rgba(254,212,6,0.8393732492997199) 75%);
    p {
        font-size: ${props => props.theme.fontSize};
        color: ${props => props.theme.primary}
    }

    svg {
        font-size: 10rem;
    }

    @media screen and (max-width: 600px) {
        height: 50vh;
    }

`;

const DivButton = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 10vh;
    bottom: 0;
    a {
        background-color: #26256b;
        color: #fff;
        box-shadow: ${props => props.theme.boxShadow};
    }

    a:hover {
        background-color: #fed406;
        color: #000;
    }

    svg {
        font-size: 4rem;
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
    color: ${props => props.theme.primary};

    &:hover {
        color: ${props => props.theme.yellow}
    }
`;

export {SectionContatos, DivContatos, DivButton, DivSociais, Links };