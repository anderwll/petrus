import styled from "styled-components";

const DivText = styled.div`
    width: 60%;
    padding: 5rem;
    background-color: rgba(122, 122, 122, 0.623);
    text-align: justify;

    h2 {
        margin-top: 0;
    }
    
    p {
        font-size: 2rem;
        margin-top: 2.5rem;
    }

    @media screen and (max-width:900px) {
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export { DivText };