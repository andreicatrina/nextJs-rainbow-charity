import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #b3bbc14d;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  padding: 24px;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;
export const LineTitle = styled.div`
  width: 100%;
  max-width: 1200px;
  border-bottom: 1px solid black;
  height: 48px;
  margin-bottom: 48px;
`;

export const AboutUsTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  margin-bottom: 80px;

  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #4a4f54;
  }

  @media (max-width: 1000px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
    margin-top: 20px;
    h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 10px;
    margin-top: 10px;
    h2 {
      font-size: 20px;
    }
  }
`;

export const FirstPostContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;

  img {
    border-radius: 8px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0;

    img {
      width: 100%;
      max-width: 600px;
      height: 240px;
    }
  }

  @media (max-width: 600px) {
    img {
      border-radius: 0;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 12px;
  border-radius: 12px;
  transition: 0.6s;

  h3 {
    font-size: 36px;
    font-weight: 700;
    color: #fa5a0a;
    padding: 0 4px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    padding: 12px 4px;
  }

  @media (max-width: 1300px) {
    span {
      font-size: 16px;
    }
  }

  @media (max-width: 1000px) {
    max-width: 600px;
    h3 {
      font-size: 28px;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const SecondPostContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;

  img {
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0;

    img {
      width: 100%;
      max-width: 600px;
      height: 240px;
      order: -1;
    }
  }

  @media (max-width: 600px) {
    img {
      border-radius: 0;
    }
  }
`;

export const ThirdPostContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;
  img {
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0;

    img {
      width: 100%;
      max-width: 600px;
      height: 240px;
    }
  }

  @media (max-width: 600px) {
    img {
      border-radius: 0;
    }
  }
`;
export const FourthPostContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;

  img {
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0 0 24px 0;

    img {
      width: 100%;
      max-width: 600px;
      height: 240px;
      order: -1;
    }
  }

  @media (max-width: 600px) {
    img {
      border-radius: 0;
    }
  }
`;
