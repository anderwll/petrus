import styled from "styled-components";

const DivButtonDefault = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;

    a {
        background: linear-gradient(to right, #5d2938, #7b3c4c, #aa5a63, #f1848c, #f6b4ac);
        background-size: 300% 300%;
        color: #ffffff;
        padding: 1.5rem 2.5rem;
        font-size: 1.5rem;
        animation: show 8s ease infinite;
    }

    a:hover {
        background: #20a0d8;
        color: #333;
    }

    @keyframes show {
        0% { background-position: 0% 50%;}
        25% { background-position: 50% 100%;}
        50% { background-position: 100% 50%;}
        75% { background-position: 50% 0%;}
        100% { background-position: 0% 50%;}
}
`;

export { DivButtonDefault };