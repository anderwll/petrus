import styled from 'styled-components';

interface DivModelPops {
    imgOpen: boolean
}

const DivGallery = styled.div`
    margin: 6rem 0;
    width: 90%;
    height: 100%;

    h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: rgba(38, 37, 107, 0.432);
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
        color: ${props => props.theme.secondary};
    }

    h4:hover {
        opacity: 1;
    }
`;

const DivModel = styled.div<DivModelPops>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.942);
    backdrop-filter: blur(2rem);
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility: ${props => props.imgOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.imgOpen ? '1' : '0'};
    transform: ${props => props.imgOpen ? 'scale(1)' : 'scale(0)'};
    overflow: hidden;
    z-index: 9999;

    img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 2rem 0 2rem;
        margin: 0 auto;
    }

    svg {
        position: fixed;
        top: 1rem;
        right: 1rem;
        font-size: 4rem;
        background-color: rgba(0,0,0,0.4);
        color: #ffff;
        cursor: pointer;
    }

`;

export { DivGallery, DivModel };