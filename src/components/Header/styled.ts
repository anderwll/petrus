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
    height: ${props => props.scrollOn ? '9rem' : '12rem'};
    background: ${props => props.scrollOn && 'rgba(0, 0, 0, 0.321)'};
    backdrop-filter: ${props => props.scrollOn && `blur(2rem)`};
    transition: .4s ease;

    @media only screen and ( max-width: 968px) {
        justify-content: space-between;
    }  
`;

const DivLinks = styled.div<HeaderProps>`
    svg {
        display: none;
        position: fixed;
        font-size: 3rem;
        top: 2.5rem;
        right: 2.5rem;
    }
    
    @media only screen and ( max-width: 968px) {
        position: fixed;
        display: ${props => props.menuOpen ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        top: 0;
        background-color: ${props => props.menuOpen && 'rgba(0, 0, 0, 0.942)'};
        text-transform: uppercase;

        a {
            color: ${props => props.menuOpen && props.theme.secondary};
            font-size: 2.5rem;
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
    margin: 2rem 1rem;
    color: ${props => props.theme.secondary};
    svg {
        font-size: 2.5rem;
    } 

    &:hover {
        color: ${props => props.theme.primary};
    }
`;

const DivMenuIcon =  styled.div<HeaderProps>`
    position: absolute;
    right: 2.5rem;
    svg {
        font-size: 3rem;
        color: ${props => props.theme.secondary};
        opacity: ${props => props.menuOpen ? '0': '1'};
    }
    @media only screen and ( min-width: 968px) {
      display: none;
    } 
`;

export { DivHeader, DivLinks, Links, DivSociais, DivMenuIcon};