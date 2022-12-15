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
        font-weight: 600 !important;
        padding: 1.5rem 3rem;
        background-color: ${props => props.theme.yellow};
        color: ${props => props.theme.primary};
    }

    a:hover {
        box-shadow: 0 0.2rem 5rem 0 rgba(3, 3, 3, 0.37);
        background: ${props => props.theme.blue};
        color: ${props => props.theme.secondary};
    }

    svg {
        width: 2rem;
    }
`;

export { DivButtonDefault };