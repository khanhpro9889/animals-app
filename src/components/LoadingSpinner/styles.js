import Styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = Styled.div`
    width: 50px;
    height: 50px;
    border-top: 4px solid #fe4a49;
    border-right: 4px solid #fe4a49;
    border-radius: 50%;
    animation: 0.7s ${spin} linear infinite;
`;
