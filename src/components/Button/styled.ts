import styled from "styled-components";

interface DivButtonDefaultProps {
    display?: boolean
}

const DivButtonDefault = styled.div<DivButtonDefaultProps>`
    display: ${props => props.display ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 2rem 0;

    a {
        background: linear-gradient(to right, #37465d, #37465d, #516789, #6e8ab9, #81a2d9);
        background-size: 300% 300%;
        color: ${props => props.theme.secondary};
        padding: 1.5rem 2.5rem;
        font-size: 1.4rem !important;
        animation: show 4s ease infinite;
    }

    a:hover {
        box-shadow: 0 2px 32px 0 rgba(3, 3, 3, 0.37);
        animation: 0;
    }

    svg {
        width: 2rem;
    }

    @keyframes show {
        0% { background-position: 0% 50%;}
        25% { background-position: 50% 100%;}
        50% { background-position: 100% 50%;}
        75% { background-position: 50% 0%;}
        100% { background-position: 0% 50%;}
    }  

    @media only screen and ( max-width: 480px) {
      a{
        font-size: 1rem;
        padding: 1.1rem 1.5rem;
      }
    } 
    

`;

export { DivButtonDefault };