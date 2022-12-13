import styled from "styled-components";

interface DivImgProps {
    bgImage: string
}

const DivBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.632);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 { 
        color: ${props => props.theme.secondary};
        font-size: 5rem;
    }

    h4 { 
        color: ${props => props.theme.secondary};
        font-size: 2.5rem;
    }

    @media screen and ( max-width: 600px ) {
        h2 { 
            font-size: 3.5rem;
        }

        h4 { 
            font-size: 1.8rem;
        }
    }
`;

const DivContent = styled.div`
    display: flex;
    align-items: center;
    top: 0;
    position: absolute;
    width: 85%;
    height: 85%;
    border-right: 0.5rem outset #fed406;
`;

const DivTitle = styled.div`
    width: 98%;
    margin-top: 5%;
`;

const DivFooter = styled.div`
    position: absolute;
    width: 85%;
    bottom: 7%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DivPa = styled.div`
    position: absolute;
    bottom: 5%;
    right: 5%;

`;

const DivImg = styled.div<DivImgProps>`
    width: 100%;
    height: 95vh;
    //filter: brightness(45%);
    background-color: rgba(0, 0, 0, 0.923);
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: 100% 100%;
    animation: showImg 10s ease;
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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