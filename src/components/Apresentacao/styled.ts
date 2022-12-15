import styled from "styled-components";

interface DivImgProps {
    bgImage: string
}

const DivBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 { 
        color: ${props => props.theme.secondary};
        font-size: 6rem;
    }

    h4 { 
        color: ${props => props.theme.secondary};
        font-size: 3rem;
    }

    @media screen and ( max-width: 600px ) {
        h2 { 
            font-size: 3rem;
        }

        h4 { 
            font-size: 2rem;
        }
    }
`;

const DivContent = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    width: 80vw;
    height: 65vh;
    border-right: 0.5rem solid ${props => props.theme.secondary};
`;

const DivTitle = styled.div`
    width: 100%;
    margin-bottom: 5%;
`;

const DivFooter = styled.div`
    position: absolute;
    width: 80vw;
    bottom: 5vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DivPa = styled.div`
    position: absolute;
    bottom: 5vh;
    right: 7.5vw;

`;

const DivImg = styled.div<DivImgProps>`
    width: 100%;
    height: 95vh;
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: 100% 100%;
    animation: showImg 10s ease;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        height: 90vh;
        background-size: cover;
        animation: 0;
    }

    // ANIMATION DESKTOP
    @keyframes showImg {
      0% {
        background-size: 150% 150%;
      }
      100% {
        background-size: 100% 100%;
      }
    }
`

export { DivContent, DivImg, DivTitle, DivBg, DivFooter, DivPa};