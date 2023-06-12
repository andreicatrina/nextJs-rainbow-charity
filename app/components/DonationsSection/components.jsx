import styled from "styled-components";

export const DonationsSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  background-color: #ffb600;
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
`;

export const OrContainer = styled.div`
  width: 2px;
  height: 300px;
  border-left: 2px solid #fff;
  z-index: 1;
  h3 {
    font-size: 24px;
    font-weight: 500;
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
`;