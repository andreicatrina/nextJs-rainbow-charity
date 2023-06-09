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

import Logo from "../../../public/logo1.png";
import { FaDonate } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          {/* <Image src={Logo} alt="" /> */}
          Logo
        </LogoContainer>
        <MenuContainer>
          <DonateLink href="">
            Donează <FaDonate />
          </DonateLink>
          <AboutLink href="">Despre Noi</AboutLink>
          <ContactLink href="tel:+40759676847">
            Contact <BsFillTelephoneFill />
          </ContactLink>
        </MenuContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
