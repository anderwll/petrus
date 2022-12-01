import styled from 'styled-components';

interface DivModelPops {
    imgOpen: boolean
}

const DivGallery = styled.div`
    margin: 4rem 0 4rem 0;
    width: 70vw;
    box-shadow: ${[props => props.theme.boxShadow]};
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33.33%;
    -moz-column-width: 33.33%;
    column-width: 33.33%;

    @media screen and (max-width: 768px) {
        width: 100vw;
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
    }
`;

const DivPics = styled.div`
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;

    &&:hover {
        filter: opacity(.7);
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
    background-color: ${props => props.theme.bgPrimary};
    backdrop-filter: blur(2rem);
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility: ${props => props.imgOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.imgOpen ? '1' : '0'};
    transform: ${props => props.imgOpen ? 'scale(1)' : 'scale(0)'};
    overflow: hidden;
    z-index: 999;

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
        top: 1.5rem;
        right: 3rem;
        font-size: 4rem;
        padding: 0.5rem;
        background-color: rgba(0,0,0,0.4);
        color: #ffff;
        cursor: pointer;
    }

`;

export { DivGallery, DivPics, DivModel };