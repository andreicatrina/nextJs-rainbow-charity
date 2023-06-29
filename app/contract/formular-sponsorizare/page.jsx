"use client";

import React from "react";

import { Header } from "../../components/Header/Header";
import { Main } from "../../components";
import { Footer } from "../../components/Footer/Footer";
import {
  BankDetailsContainer,
  CompanyDetailsDiv,
  Form,
  FormPageContainer,
  FormPageSection,
  LegalRepresentativeContainer,
  SubmitButtonContainer,
} from "./components";

export default function Formpage() {
  return (
    <Main>
      <Header />
      <FormPageSection>
        <FormPageContainer>
          <h2>
            Completează datele firmei și noi îți vom genera automat contractul
            de sponsorizare
          </h2>
          <Form action="">
            <CompanyDetailsDiv>
              <label htmlFor="">CUI Firma</label>
              <input type="text" placeholder="CUI" />

              <label htmlFor="">Nume companie</label>
              <input type="text" placeholder="Ex: S.C. ABC S.R.L." />

              <label htmlFor="">Nr. Reg. Com.</label>
              <input type="text" placeholder="Ex: J17/1729/2018" />

              <label htmlFor="">Adresa</label>
              <input type="text" placeholder="Strada, Nr." />

              <label htmlFor="">Cod Postal</label>
              <input type="text" placeholder="" />

              <label htmlFor="">Județ</label>
              <input type="text" placeholder="" />

              <label htmlFor="">Oraș</label>
              <input type="text" placeholder="" />
            </CompanyDetailsDiv>
            <h3>Reprezentant Legal</h3>
            <p>Aceste informații vor apărea în contract</p>
            <LegalRepresentativeContainer>
              <label htmlFor="">Titlu</label>
              <select name="" id="">
                <option value="">Dna.</option>
                <option value="">Dl.</option>
              </select>

              <label htmlFor="">Nume</label>
              <input type="text" placeholder="" />

              <label htmlFor="">Prenume</label>
              <input type="text" placeholder="" />

              <label htmlFor="">Email</label>
              <input type="email" placeholder="" />

              <label htmlFor="">Telefon</label>
              <input type="tel" placeholder="" />

              <label htmlFor="">Poziția în cadrul companiei</label>
              <select name="" id="">
                <option value="">Administrator</option>
                <option value="">Director</option>
                <option value="">Director General</option>
                <option value="">Director Executiv</option>
                <option value="">Asociat</option>
                <option value="">Presedinte</option>
                <option value="">Vicepresedinte</option>
                <option value="">Reprezentant Legal</option>
              </select>
            </LegalRepresentativeContainer>
            <h3>Date Bancare</h3>
            <p>
              Datele introduse vor fi folosite atât în contract, cât și pentru a
              identifica plățile în platforma noastră
            </p>
            <BankDetailsContainer>
              <label htmlFor="">Cont IBAN</label>
              <input type="text" placeholder="" />
              <label htmlFor="">Deschis la banca</label>
              <input type="text" placeholder="Nume Banca" />

              <h3>Completează data și suma</h3>

              <label htmlFor="">Data contractului</label>
              <input type="date" placeholder="" />
              <label htmlFor="">Suma din contract</label>
              <input type="number" placeholder="" />
            </BankDetailsContainer>
            <SubmitButtonContainer>
              <button>Finalizare</button>
            </SubmitButtonContainer>
          </Form>
          <h2>Îți mulțumim pentru contribuția făcută!</h2>
        </FormPageContainer>
      </FormPageSection>
      <Footer />
    </Main>
  );
}
