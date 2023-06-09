import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 500px; */
  position: relative;
  -webkit-box-shadow: 3px 5px 10px 8.5px #adabab;
  -moz-box-shadow: 3px 5px 10px 8.5px #adabab;
  box-shadow: 3px 5px 10px 8.5px #adabab;
  z-index: 1;
  img {
    /* width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0; */
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  max-width: 1600px;
  padding: 12px 24px;
`;

export const LogoContainer = styled.div`
  display: flex;
  z-index: 1;
  font-size: 24px;
  font-weight: 700;

  img {
    width: 240px;
    height: 160px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
  z-index: 1;

  a {
    height: 40px;
    padding: 0 12px;
  }
`;

export const DonateLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid transparent;
  font-size: 16px;
  font-weight: 600;
  background-color: #ffb600;
  color: white;
  border-radius: 6px;
  transition: 0.6s;

  svg {
    color: #fff;
    transition: 0.6s;
  }

  :hover {
    background-color: transparent;
    border: 1px solid #ffb600;
    color: #ffb600;
    transform: scale(1.1);

    svg {
      color: #ffb600;
    }
  }
`;

export const AboutLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffb600;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.6s;

  :hover {
    background-color: #ffb600;
    color: #fff;
    transform: scale(1.1);
  }
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid #ffb600;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.6s;

  svg {
    transition: 0.6s;
    width: 16px;
    height: 16px;
  }

  :hover {
    background-color: #ffb600;
    color: white;
    transform: scale(1.1);

    svg {
      color: white;
    }
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
    color: black;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    animation: fadeIn 6s;
  }

  p {
    font-size: 32px;
    color: white;
    animation: fadeIn 12s;
    font-weight: 500;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h3`
  font-size: 64px;
  font-weight: 500;
  color: white;
  animation: fadeIn 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const SubtitleContainer = styled.div``;
