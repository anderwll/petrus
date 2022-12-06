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

    a:hover {
        box-shadow: 0 2px 32px 0 rgba(3, 3, 3, 0.37);
    }

    svg {
        width: 2rem;
    }

`;

export { DivButtonDefault };