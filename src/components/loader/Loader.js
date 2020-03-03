import styled, { keyframes } from "styled-components";

const spinHorizontal = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

export const Loader = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 60px;
  height: 60px;
  background-image: url("https://picua.org/images/2020/03/02/6acacacabccc156fd520671cb6fa6ed6.th.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  animation: ${spinHorizontal} 1.7s linear infinite;
`;

export default Loader;
