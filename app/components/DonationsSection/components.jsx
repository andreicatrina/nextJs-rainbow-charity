import styled from "styled-components";

export const DonationsSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const DonationsContainer = styled.div`
  width: 100%;
  max-width: 1600px;
`;

export const DonationsTitleContainer = styled.div`
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

export const LineTitle = styled.div`
  width: 100%;
  max-width: 1200px;
  border-bottom: 1px solid black;
  height: 48px;
  margin-bottom: 48px;
`;

export const DonationsDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const DonationDetailsLeft = styled.div`
  width: 100%;
  max-width: 600px;
`;
export const DonationDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 600px;

  button {
    width: 100%;
    max-width: 300px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;
    background-color: transparent;
    font-family: "Playfair Display", serif;
    cursor: pointer;
    transition: 0.6s;

    :hover {
      background-color: black;
      color: white;
    }
  }
`;

export const OrContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
`;
