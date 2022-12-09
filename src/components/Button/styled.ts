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
        font-size: 1.6rem !important;
        padding: 1.5rem 3rem;
        background: linear-gradient(to right, #26256b, #26256b, #fed403, #fed403 );
        background-size: 300% 300%;
        color: ${props => props.theme.secondary};
        animation: backgroundOverlay 5s ease infinite;
    }

    a:hover {
        box-shadow: 0 2px 32px 0 rgba(3, 3, 3, 0.37);
    }

    svg {
        width: 2rem;
    }

    @keyframes backgroundOverlay {
        0% { background-position: 0% 50%;}
        25% { background-position: 50% 100%;}
        50% { background-position: 100% 50%;}
        75% { background-position: 50% 0%;}
        100% { background-position: 0% 50%;}
    }

`;

export { DivButtonDefault };