"use client";
import React from "react";

import Image from "next/image";

import Banner from "../../../public/Banner.jpg";

import { LandingSectionContainer, Title, TitleContainer } from "./components";

export const LandingSection = () => {
  return (
    <LandingSectionContainer>
      <Image
        src={Banner}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // transform: "scale(2)",
          // filter: "blur(1px)",
        }}
        alt="Charity together"
      />
      <TitleContainer>
        <Title>ÎMPREUNĂ</Title>
        <span>PENTRU</span>
        <p>O LUME MAI BUNĂ</p>
      </TitleContainer>
    </LandingSectionContainer>
  );
};
