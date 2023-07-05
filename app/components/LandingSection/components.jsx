import styled from "styled-components";

export const LandingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  position: relative;

  @media (max-width: 700px) {
    height: 400px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  position: absolute;
  bottom: 150px;
  left: 0;
  width: 100%;
  /* max-width: 400px; */

  border-radius: 8px;

  span {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 500;
    color: #fff;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    animation: fadeIn 6s;
  }

  p {
    font-size: 32px;
    color: #fa5a0a;
    animation: fadeIn 12s;
    font-weight: 600;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1000px) {
    span {
      font-size: 32px;
    }

    p {
      font-size: 24px;
    }
  }

  @media (max-width: 700px) {
    span {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 64px;
  font-weight: 700;
  color: #4a4f54;
  animation: fadeIn 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1000px) {
    font-size: 52px;
  }

  @media (max-width: 700px) {
    font-size: 40px;
  }
`;
