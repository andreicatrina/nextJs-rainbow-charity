import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 24px 12px;

  h2 {
    font-size: 40px;
    font-weight: 500;
  }
`;

export const FirstPostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;

  img {
    transition: 0.6s;
    :hover {
      transform: scale(1.1);
    }
  }

  h3 {
    /* background-color: #ffb600; */
    line-height: 32px;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 600;
    padding: 0 8px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 12px;
  transition: 0.6s;

  span {
    font-size: 18px;
    font-weight: 400;
    padding: 12px 4px;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const SecondPostContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;

  img {
    transition: 0.6s;
    :hover {
      transform: scale(1.1);
    }
  }

  h3 {
    /* background-color: #dc7726; */
    line-height: 32px;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 600;
    padding: 0 8px;
  }
`;

export const ThirdPostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 64px 24px;
  gap: 48px;

  img {
    transition: 0.6s;
    :hover {
      transform: scale(1.1);
    }
  }

  h3 {
    /* background-color: #ffb600; */
    line-height: 32px;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 600;
    padding: 0 8px;
  }
`;
