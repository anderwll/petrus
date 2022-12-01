import styled from "styled-components";

interface DivHeaderProps {
    scrollOn: boolean
}

interface DivLinksProps {
    menuOpen: boolean;
}

const DivHeader = styled.div<DivHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: ${props => props.scrollOn ? '8rem' : '12rem'};
    background: ${props => props.scrollOn ? props.theme.primary : 'transparent'};
    box-shadow: ${props => props.scrollOn ? '0 8px 32px 0 rgba(3, 3, 3, 0.37)' : '0'};
    backdrop-filter: ${props => props.scrollOn ? 'blur(13.5px)' : '0'};
    -webkit-backdrop-filter: ${props => props.scrollOn ? 'blur(13.5px)' : '0'};
    border: ${props => props.scrollOn ? '1px solid rgba(255, 255, 255, 0.18)' : 'none'};
    border-radius: ${props => props.scrollOn ? '0.5rem' : '0'};
    transition: .4s ease;
    svg:hover {
        color: #fff;
        cursor: pointer;
    }
`;
 
const DivLogo = styled.div`
    img {
        width: 7rem;
        height: 4rem;
    }
`;

const DivLinks = styled.div<DivLinksProps>`
    svg {
        display: none;
    }
    
    @media only screen and ( max-width: 968px) {
        position: absolute;
        display: ${props => props.menuOpen ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-color: rgba(122, 122, 122, 0.623);
        top: 0;
        text-transform: uppercase;
        svg {
            display: block;
            position: fixed;
            font-size: 3rem;
            top: 2.5rem;
            right: 2.5rem;
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
    font-size: 2rem;
    margin: 2rem 1rem;
    color: #333;
    svg {
        font-size: 2.5rem;
    } 
    &:hover {
        color: blue;
    }
`;

const DivMenuIcon =  styled.div<DivLinksProps>`
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