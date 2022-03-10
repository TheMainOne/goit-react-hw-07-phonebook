import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
padding-left: 20px;
    padding-right: 20px;
`;

export const WrapperForContactsForm = styled.div`
display: flex;
`;

export const SecondHeaderWrapper = styled.div`
display: flex;
    align-items: center;
`;


export const SiteHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="20"
      cy="20"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  & .path {
    stroke: #29d;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
