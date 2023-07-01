'use client';

import {
  ContractSectionContainer,
  ContractSection,
  Main,
  ContractContainer,
  LinksContainer,
  DonationContainer,
  CardsContainer,
  TitleContainer,
} from "./components";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import fileDownload from "js-file-download";
import Link from "next/link";
import axios from "axios";

export default function ContractPage() {

  async function onClick() {
    const response = await axios.get("http://localhost:3001/contract/download", {responseType: 'blob'});
    fileDownload(response.data, "contract.pdf")
  }

  return (
    <Main>
      <Header />
      <ContractSection>
        <ContractSectionContainer>
          <TitleContainer>
            <h3>Fă o #faptăBună</h3>
            <span>Donația ta contează!</span>
            <button onClick={onClick}>contract</button>
          </TitleContainer>
          <CardsContainer>
            <ContractContainer>
              <h3>
                Anul 2023: folosește butonul de mai jos, completează contractul
                și virează suma dorită în contul Asociației până la 30 iunie.{" "}
              </h3>
              <Link href="contract/formular-sponsorizare">
                <button>Contract 2023</button>
              </Link>
              <LinksContainer>
                <a href="">Model de contract</a>
                <a href="">Declaratia 107</a>
              </LinksContainer>
            </ContractContainer>
            <DonationContainer>
              <h3>
                Dacă ești persoană fizică poți alege să redirecționezi 3,5% din
                impozitul pe anul 2022:
              </h3>
              <button>Descarca declaratia</button>
              <LinksContainer>
                <a href="">Model de declaratie</a>
              </LinksContainer>
            </DonationContainer>
          </CardsContainer>
        </ContractSectionContainer>
      </ContractSection>
      <Footer />
    </Main>
  );
}
