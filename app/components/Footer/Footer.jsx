"use client";

import React from "react";
import {
  CasesDonations,
  CasesMail,
  CasesPhone,
  ContactContainer,
  ContactDetailsContainer,
  DonationsPhone,
  FacebookLink,
  FooterCompanyDetails,
  FooterContainer,
  FooterLine,
  FooterLineContainer,
  FooterSection,
  GoogleMapsLink,
  InstagramLink,
  SocialsContainer,
  SocialsLinksContainer,
  WhatsappLink,
} from "./components";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <ContactContainer>
          <ContactDetailsContainer>
            <h3>Ține legătura cu noi</h3>
            <CasesPhone>
              Telefon pentru cazuri
              <a href="tel:+40759676847">
                0759 676 847 <BsFillTelephoneFill />
              </a>
            </CasesPhone>
            <DonationsPhone>
              Telefon pentru donații
              <a href="tel:+40759676847">
                0759 676 847 <BsFillTelephoneFill />
              </a>
            </DonationsPhone>
            <CasesMail>
              E-mail pentru cazuri
              <a href="mailto:asociatiacurcubeulprieteniei@gmail.com">
                <AiFillMail />
                asociatiacurcubeulprieteniei@gmail.com
              </a>
            </CasesMail>
            <CasesDonations>
              E-mail pentru donații
              <a href="mailto:asociatiacurcubeulprieteniei@gmail.com">
                <AiFillMail />
                asociatiacurcubeulprieteniei@gmail.com
              </a>
            </CasesDonations>
          </ContactDetailsContainer>
          <SocialsContainer>
            <h3>Cunoaște-ne</h3>
            <SocialsLinksContainer>
              <FacebookLink
                href="https://www.facebook.com/profile.php?id=100087526686228"
                target="_blank"
              >
                <FaFacebookSquare />
              </FacebookLink>
              <InstagramLink href="https://www.instagram.com/" target="_blank">
                <GrInstagram />
              </InstagramLink>
              <WhatsappLink
                href="https://wa.me/40759676847?text=Buna ziua!Cu ce informatii va putem ajuta?"
                target="_blank"
              >
                <FaWhatsapp />
              </WhatsappLink>
              <GoogleMapsLink href="" target="_blank">
                <SiGooglemaps />
              </GoogleMapsLink>
            </SocialsLinksContainer>
          </SocialsContainer>
        </ContactContainer>
        <FooterLineContainer>
          <FooterLine></FooterLine>
        </FooterLineContainer>
        <FooterCompanyDetails>
          <div>
            <p>Asociația "Curcubeul Prieteniei"</p>
            <p>Cod Fiscal : 00000000</p>
          </div>
          <div>
            <p>IBAN EURO: RO00 INGB 0000 0000 0000 0000</p>
            <p>Banca: ING Bank</p>
            <p>SWIFT Code: INGBROBU</p>
            <p>Beneficiar : Asociatia "Curcubeul Prieteniei"</p>
          </div>
          <div>
            <p>IBAN LEI: RO00 INGB 0000 0000 0000 0000</p>
            <p>Banca: ING Bank</p>
            <p>SWIFT Code: INGBROBU</p>
            <p>Beneficiar : Asociatia "Curcubeul Prieteniei"</p>
          </div>
        </FooterCompanyDetails>
      </FooterContainer>
    </FooterSection>
  );
};
