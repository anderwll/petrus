import styled from 'styled-components';

interface SectionDefProps {
    bgColor?: string,
    h2Width?: boolean,
}

const SectionDef = styled.section<SectionDefProps>`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    padding: 4rem 0;
    background: ${props => props.bgColor};
    overflow-x: hidden;

    h2 {
        display: flex;
        justify-content: ${props => props.h2Width ? 'start' : 'center'};
        width: ${props => props.h2Width ? '100%' : '30rem'};
        border-bottom: 0.2rem solid ${props => props.h2Width ? '#26256b' : '#fed406'};
    }

   /*  h3 {
        display: flex;
        justify-content: center;
        width: 40rem;
        border-bottom: 0.2rem solid #26256b;;
    } */


`;

export { SectionDef };