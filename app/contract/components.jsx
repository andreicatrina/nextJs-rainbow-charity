"use client";

import styled from "styled-components";

export const Main = styled.main``;

export const ContractSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffb600;
`;
export const ContractSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px;
`;
export const ContractContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  padding: 32px;
  background-color: #88959e;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    padding-bottom: 32px;
    color: #fff;
    height: 140px;
  }

  button {
    background-color: #4a4f54;
    width: 100%;
    max-width: 250px;
    height: 48px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    font-family: "Rubik", sans-serif;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.6s;

    :hover {
      color: #4a4f54;
      background-color: #fff;
    }
  }

  @media (max-width: 1100px) {
    padding: 24px;
    h3 {
      font-size: 18px;
    }

    button {
      width: 220px;
      height: 40px;
      font-size: 16px;
    }
  }
  @media (max-width: 800px) {
    padding: 20px;
    height: 240px;
    h3 {
      font-size: 16px;
    }

    button {
      width: 200px;
      height: 40px;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    height: 260px;
    h3 {
      padding-bottom: 20px;
    }
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;

  a {
    cursor: pointer;
    color: #fff;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const DonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  padding: 32px;
  background-color: #fa5a0a;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    padding-bottom: 32px;
    color: #fff;
    height: 140px;
  }

  button {
    background-color: #4a4f54;
    width: 100%;
    max-width: 250px;
    height: 48px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    font-family: "Rubik", sans-serif;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.6s;

    :hover {
      color: #4a4f54;
      background-color: #fff;
    }
  }

  @media (max-width: 1100px) {
    padding: 24px;
    h3 {
      font-size: 18px;
    }

    button {
      width: 220px;
      height: 40px;
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
    padding: 20px;
    height: 240px;
    h3 {
      font-size: 16px;
    }

    button {
      width: 200px;
      height: 40px;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    height: 260px;
    h3 {
      padding-bottom: 20px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1800px;
  /* border: 2px solid red; */
  margin: 80px 0;
  padding: 0 24px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  padding: 24px;

  h3 {
    color: #88959e;
    font-size: 60px;
    font-weight: 800;
  }

  span {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 1100px) {
    h3 {
      font-size: 48px;
    }
    span {
      font-size: 32px;
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 40px;
    }
    span {
      font-size: 24px;
    }
  }
`;
