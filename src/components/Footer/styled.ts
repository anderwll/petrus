import styled from "styled-components";

const DivFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: #333;
    p {
        font-size: 1.4rem;
        color: ${props => props.theme.secondary}
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.secondary};
    }
`;

export { DivFooter };