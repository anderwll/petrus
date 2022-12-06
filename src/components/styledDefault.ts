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
    background-image: url(${props => props.bgImg});
    background-color: ${props => props.bgColor};
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
    
    h2 {
        margin-top: 2.5rem;
        font-weight: bold;
    }

    h3, h4 {
        font-weight: bold;
    }

    
`;

export { SectionDef };