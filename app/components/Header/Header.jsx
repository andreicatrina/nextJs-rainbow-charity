"use client";
import React from "react";

import {
  AboutLink,
  ContactLink,
  DonateLink,
  HeaderContainer,
  HeaderSection,
  LogoContainer,
  MenuContainer,
  SubtitleContainer,
  Title,
  TitleContainer,
} from "./components";

import Image from "next/image";
import Logo from "../../../public/logo1.png";
import Banner from "../../../public/Banner.jpg";
import { FaDonate } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Header = () => {
  return (
    <HeaderSection>
      <Image
        src={Banner}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // filter: "blur(1px)",
        }}
      />

      <HeaderContainer>
        <LogoContainer>
          {/* <Image src={Logo} alt="" /> */}
          Logo
        </LogoContainer>
        <MenuContainer>
          <DonateLink href="">
            Doneaza <FaDonate />
          </DonateLink>
          <AboutLink href="">Despre Noi</AboutLink>
          <ContactLink href="tel:+40759676847">
            Contact <BsFillTelephoneFill />
          </ContactLink>
        </MenuContainer>
      </HeaderContainer>
      <TitleContainer>
        <Title>ÎMPREUNĂ</Title>
        <span>CONSTRUIM</span>
        <p>O LUME MAI BUNĂ</p>
      </TitleContainer>
    </HeaderSection>
  );
};
