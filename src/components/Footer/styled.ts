import styled from "styled-components";

const DivFooter = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 1rem;
    background-color: #fed280;
  
    a, p {
        font-size: 1.5rem !important;
        text-decoration: none;
        color: ${props => props.theme.primary};
    }

    a:hover {
        color: ${props => props.theme.secondary}
    }
`;

export { DivFooter };