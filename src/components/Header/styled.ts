import styled from "styled-components";

interface HeaderProps {
    scrollOn?: boolean,
    menuOpen?: boolean
}

const DivHeader = styled.div<HeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 99;
    width: 100%;
    height: ${props => props.scrollOn ? '10rem' : '15rem'};
    background: ${props => props.scrollOn && 'rgba(38, 37, 107, 0.932)'};
    transition: 1s ease;


    @media only screen and ( max-width: 1100px) {
        justify-content: space-between;
    }  
`;

const DivLinks = styled.div<HeaderProps>`
    svg {
        display: none;
        position: fixed;
        font-size: 4rem;
        top: 3rem;
        right: 2.5rem;
    }
    
    @media only screen and ( max-width: 1100px) {
        position: fixed;
        display: ${props => props.menuOpen ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        top: 0;
        background-color: ${props => props.menuOpen && 'rgba(38, 37, 107, 0.998)'};
        text-transform: uppercase;

        a {
            color: ${props => props.menuOpen && props.theme.secondary};
            font-size: 2.5rem !important;
        }

        svg {
            display: block; 
            color: ${props => props.menuOpen && props.theme.secondary};     
        }
  }
`;

const DivSociais = styled.div`
   @media only screen and ( max-width: 1268px) {
      display: none;
    } 
`;

const Links = styled.a`
    text-decoration: none;
    font-size: ${props => props.theme.fontSize};
    font-weight: 600;
    margin: 1.5rem;
    color: ${props => props.theme.secondary};
    svg {
        font-size: 2.5rem;
    } 

    &:hover {
        color: ${props => props.theme.yellow};
    }
`;

const DivMenuIcon =  styled.div<HeaderProps>`
    position: absolute;
    right: 2.5rem;
    svg {
        font-size: 4rem;
        color: ${props => props.theme.secondary};
        opacity: ${props => props.menuOpen ? '0': '1'};
    }
    @media only screen and ( min-width: 1100px) {
      display: none;
    } 
`;

export { DivHeader, DivLinks, Links, DivSociais, DivMenuIcon};