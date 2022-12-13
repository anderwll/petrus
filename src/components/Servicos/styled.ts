import styled from 'styled-components';

interface DivCardProps {
    bgImg?: string
}

const DivServicos = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 70%;
    height: 100%;
    padding: 10rem;

    @media screen and (max-width: 1630px) {
       width: 80%;
       padding: 7rem;
    }

    @media screen and (max-width: 1536px) {
       width: 100%;
       gap: 2rem;
       padding: 4rem;
    }

    @media screen and (max-width: 1047px) {
        flex-direction: column;
        padding: 4rem 0;
    }

`;

const SectionCard = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 38rem;
`

const DivCard = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 0.5s ease;

    &&:hover{
        transform: rotateY(180deg);
    }
`;

const DivFront = styled.div<DivCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32rem;
    height: 38rem;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: cover;
    backface-visibility: hidden;
    box-shadow: ${props => props.theme.boxShadow};
    overflow: hidden;
    position: absolute;
`;

const DivBack = styled.div<DivCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32rem;
    height: 38rem;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: cover;
    backface-visibility: hidden;
    box-shadow: ${props => props.theme.boxShadow};
    overflow: hidden;
    transform: rotateY(180deg);
    position: absolute;
`;

const DivContent = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    background-color: rgba(38, 37, 107, 0.421);

    h3, p {
        color: ${props => props.theme.secondary};
    }

    width: 100%;
    height: 100%;
`;


export { DivServicos, SectionCard, DivCard, DivFront, DivBack, DivContent };