import styled from "styled-components";

const DivText = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 4rem;
    width: 100%;
    height: 90vh;

    h3 {
        color: ${props => props.theme.secondary};
    }
`;

export { DivText };