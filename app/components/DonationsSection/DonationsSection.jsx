"use client";

import React from "react";
import {
  DonationsContainer,
  DonationsDetailsContainer,
  DonationDetailsLeft,
  DonationsSectionContainer,
  DonationsTitleContainer,
  LineTitle,
  DonationDetailsRight,
  OrContainer,
  ThankYouContainer,
} from "./components";
import Link from "next/link";

export const DonationsSection = () => {
  return (
    <DonationsSectionContainer>
      <DonationsContainer>
        <DonationsTitleContainer>
          {/* <LineTitle></LineTitle> */}
          <h2>Donează și salvează</h2>
        </DonationsTitleContainer>
        <DonationsDetailsContainer>
          <DonationDetailsLeft>
            <h3>
              Ne poți sprijini activitatea donând orice sumă în lei sau euro în
              conturile:
            </h3>
            <p>{`RO37 INGB 0000 0000 0000 0000 - LEI`}</p>
            <p>{`RO32 INGB 0000 0000 0000 0000 - EURO`}</p>
            <h4>{`Asociația "Curcubeul Prieteniei"`}</h4>
            <p>C.U.I. 40000000</p>
          </DonationDetailsLeft>
          <OrContainer></OrContainer>
          <DonationDetailsRight>
            <h3>Dacă ești persoană fizică:</h3>
            <span>
              poți alege să redirecționezi 3,5% din impozitul pe anul 2022:
            </span>
            <Link href="/contract">
              <button>Completează declarația</button>
            </Link>
            <h3>Dacă ești persoană juridică:</h3>
            <span>ne poți susține printr-o sponsorizare:</span>
            <Link href="/contract">
              <button>Contract de sponsorizare</button>
            </Link>
          </DonationDetailsRight>
        </DonationsDetailsContainer>
        <ThankYouContainer>
          <h3>Îți mulțumim!</h3>
          <p>
            Încercăm să normalizăm donațiile, așa că te rugăm să folosești{" "}
            <span>#faptăBună</span> în postările tale legate de donațiile făcute
            la noi{" "}
          </p>
        </ThankYouContainer>
      </DonationsContainer>
    </DonationsSectionContainer>
  );
};
