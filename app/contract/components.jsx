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
  width: 100%;
  height: 260px;
  padding: 32px;
  background-color: #88959e;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    padding-bottom: 48px;
    color: #fff;
  }

  button {
    background-color: #4a4f54;
    width: 100%;
    max-width: 250px;
    height: 48px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border: none;
    cursor: pointer;
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
`;

export const DonationContainer = styled.div`
  width: 100%;
  height: 260px;
  padding: 32px;
  background-color: #fa5a0a;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    padding-bottom: 48px;
    color: #fff;
  }

  button {
    background-color: #4a4f54;
    width: 100%;
    max-width: 250px;
    height: 48px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border: none;
    cursor: pointer;
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
`;
