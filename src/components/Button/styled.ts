import styled from "styled-components";

const DivButtonDefault = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;

    a {
        background: linear-gradient(to right, #020024, #08086d, #090979, #064ea6, #029dda);
        background-size: 300% 300%;
        color: ${props => props.theme.secondary};
        padding: 1.5rem 2.5rem;
        font-size: 1.5rem;
        animation: show 4s ease infinite;
    }

    a:hover {
        box-shadow: 0 2px 32px 0 rgba(3, 3, 3, 0.37);
        animation: 0;
    }

    svg {
        width: 2rem;
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