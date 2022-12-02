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
    height: ${props => props.scrollOn ? '8rem' : '10rem'};
    background: ${props => props.scrollOn && props.theme.bgPrimary};
    box-shadow: ${props => props.scrollOn && props.theme.boxShadow};
    backdrop-filter: ${props => props.scrollOn && `blur(2rem)`};
    border: ${props => props.scrollOn && '1px solid rgba(255, 255, 255, 0.18)'};
    border-radius: ${props => props.scrollOn && '0.5rem'};
    transition: .4s ease;
    
`;
 
const DivLogo = styled.div`
    img {
        width: 7rem;
        height: 4rem;
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
        z-index: 999;
        top: 0;
        background-color: ${props => props.menuOpen && 'rgba(0, 0, 0, 0.942)'};
        text-transform: uppercase;

        a {
            color: ${props => props.menuOpen && props.theme.secondary};

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
    font-size: 1.6rem;
    margin: 2rem 1rem;
    color: ${props => props.theme.primary};
    svg {
        font-size: 2.5rem;
    } 

    &:hover {
        color: ${props => props.theme.secondary};
    }
`;

const DivMenuIcon =  styled.div<HeaderProps>`
    position: absolute;
    right: 2.5rem;
    svg {
        font-size: 3rem;
        opacity: ${props => props.menuOpen ? '0': '1'};
    }
    @media only screen and ( min-width: 968px) {
      display: none;
    } 
`;

export { DivHeader, DivLogo, DivLinks, Links, DivSociais, DivMenuIcon};