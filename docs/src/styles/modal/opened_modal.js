import styled from "styled-components";

export const OpenModal = styled.div`
    display: "block";
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;

`;

export const OpenModalContent = styled.div`
    position: absolute;
    z-index:100;
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,100%);
        opacity: 0;
        padding: 20px;
        width: 585px;
        height: 60%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: #fefefe;
        transition: all 0.5s ease-in-out;
`;
