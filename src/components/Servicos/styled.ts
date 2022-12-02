import styled from "styled-components";

const DivServicos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    width: 60vw;

    img {
        height: 28rem;
    }

    p {
        font-size: ${props => props.theme.fontSize};
        width: 100%;
        text-align: center;
    }
    
    h3 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1200px) {
        width: 80vw; 
    } 
    
`;

export { DivServicos };