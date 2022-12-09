import styled from 'styled-components';

interface SectionDefProps {
    bgImg?: string,
    bgColor?: string
}

const SectionDef = styled.section<SectionDefProps>`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    padding: 1.6rem;
    margin-top: 6rem;
    background-image: url(${props => props.bgImg});
    background-color: ${props => props.bgColor};
    background-size: cover;
    background-position: center;
    overflow-x: hidden;

`;

export { SectionDef };