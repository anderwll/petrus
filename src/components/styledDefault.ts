import styled from 'styled-components';

interface SectionDefProps {
    bgImg?: string,
    bgColor?: string
}

const SectionDef = styled.section<SectionDefProps>`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    background-image: url(${props => props.bgImg});
    background-color: ${props => props.bgColor};
    background-size: cover;
    background-position: center;
    h2 {
        margin-top: 2.5rem;
    }
`;

const DivDef = styled.div`
    width: 60%;
    padding: 1.5rem;


    @media screen and (max-width: 998px) {
        width: 80%;
    }
`;

export { SectionDef, DivDef };