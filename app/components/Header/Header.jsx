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
} from "./components";

import { FaDonate } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";

export const Header = () => {
  function scrollToDonate() {
    window.scroll(0, 2600);
  }

  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <Link href="/">Logo</Link>
        </LogoContainer>
        <MenuContainer>
          <DonateLink onClick={scrollToDonate}>
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
