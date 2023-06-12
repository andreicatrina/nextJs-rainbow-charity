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
  height: 1800px;
  width: 100%;
  max-width: 1600px;
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
`;

export const FirstPostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 600px; */
  padding: 12px;
  /* border: 1px solid gray; */
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
`;

export const SecondPostContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;
`;

export const ThirdPostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;
`;
