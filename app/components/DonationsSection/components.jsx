import styled from "styled-components";

export const DonationsSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  background-color: #ffb600;

  @media (max-width: 1000px) {
    height: 640px;
  }
  @media (max-width: 700px) {
    height: 800px;
  }
`;

export const DonationsContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 24px;
`;

export const DonationsTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px;
  margin-bottom: 80px;

  h2 {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 1000px) {
    margin-bottom: 40px;
    h2 {
      font-size: 32px;
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 20px;
    padding: 20px 12px;
    h2 {
      font-size: 20px;
    }
  }
`;

export const LineTitle = styled.div`
  width: 100%;
  max-width: 1200px;
  border-bottom: 1px solid black;
  height: 48px;
  margin-bottom: 48px;
`;

export const DonationsDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DonationDetailsLeft = styled.div`
  width: 100%;
  height: 300px;
  padding: 32px;
  border-radius: 8px;
  background-color: #fa5a0a;

  h3 {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 12px;
    color: #fff;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    padding: 12px 0;
  }

  p {
    font-size: 18px;
    color: #fff;
  }

  @media (max-width: 1000px) {
    padding: 20px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    padding: 12px;
    height: 220px;
    width: 100%;
    max-width: 400px;
    h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }
  }
`;
export const DonationDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 300px;
  padding: 32px;
  border-radius: 8px;
  background-color: #88959e;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }

  button {
    background-color: #4a4f54;
    width: 100%;
    max-width: 250px;
    height: 48px;
    color: #fff;
    border: 1px solid #4a4f54;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    font-family: "Rubik", sans-serif;
    cursor: pointer;
    transition: 0.6s;

    :hover {
      color: #4a4f54;
      background-color: #fff;
    }
  }

  @media (max-width: 1300px) {
    h3 {
      font-size: 18px;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 1000px) {
    padding: 20px;
    justify-content: center;
    height: 260px;
    h3 {
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }

    button {
      font-size: 14px;
      max-width: 200px;
      height: 40px;
    }
  }

  @media (max-width: 700px) {
    padding: 12px;
    height: 220px;
    width: 100%;
    max-width: 400px;

    h3 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }

    button {
      font-size: 12px;
      max-width: 180px;
      height: 32px;
    }
  }
`;

export const OrContainer = styled.div`
  width: 2px;
  height: 300px;
  border-left: 2px solid #fff;
  z-index: 1;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 500px;
    padding: 0 12px;
    height: 2px;
    background-color: #fff;
    border-left: none;
  }
`;

export const ThankYouContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 12px;
  margin-top: 80px;
  gap: 20px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    padding: 12px 0;
  }

  p {
    font-size: 18px;
    font-weight: 600;

    span {
      font-weight: 700;
      font-size: 22px;
      color: #88959e;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 40px;
    gap: 12px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;

      span {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 700px) {
    margin-top: 20px;
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 12px;

      span {
        font-size: 16px;
      }
    }
  }
`;