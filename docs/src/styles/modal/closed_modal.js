import styled from "styled-components";
import { slideIn } from "../keyframes";

const ClosedModal = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
`;

const ClosedModalContent = styled.div`
    position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        width: 585px;
        height: 60%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: #fefefe;
        animation: ${slideIn} 0.5s ease;
`;
