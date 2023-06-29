"use client";

import React, { useState } from "react";

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
  const [companyNo, setCompanyNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyReg, setCompanyReg] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");

  const [title, setTitle] = useState("");

  const [lastName, setLastName] = useState("");

  function onChangeCompanyNo(e) {
    setCompanyNo(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  }

  function onChangeCompanyName(e) {
    setCompanyName(e.currentTarge.value);
  }

  function onChangeReg(e) {
    setCompanyReg(e.currentTarget.value);
  }

  function onChangeCompanyAddress(e) {
    setCompanyAddress(e.currentTarget.value);
  }

  function onChangePostalCode(e) {
    setPostalCode(e.currentTarget.value);
  }

  function onChangeCounty(e) {
    setCounty(e.currentTarget.value);
  }

  function onChangeCity(e) {
    setCity(e.currentTarget.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
    console.log(e.target.value);
  }

  function onChangeLastName(e) {
    setName(e.currentTarget.value);
  }

  return (
    <Main>
      <Header />
      <FormPageSection>
        <FormPageContainer>
          <h2>Completează datele firmei și noi îți vom genera automat contractul de sponsorizare</h2>
          <Form action="">
            <CompanyDetailsDiv>
              <label htmlFor="">CUI Firma</label>
              <input value={companyNo} type="text" placeholder="CUI" onChange={onChangeCompanyNo} />

              <label htmlFor="">Nume companie</label>
              <input value={companyName} type="text" placeholder="Ex: S.C. ABC S.R.L." onChange={onChangeCompanyName} />

              <label htmlFor="">Nr. Reg. Com.</label>
              <input type="text" placeholder="Ex: J17/1729/2018" onChange={onChangeReg} />

              <label htmlFor="">Adresa</label>
              <input type="text" placeholder="Strada, Nr." onChange={onChangeCompanyAddress} />

              <label htmlFor="">Cod Postal</label>
              <input type="text" placeholder="" onChange={onChangePostalCode} />

              <label htmlFor="">Județ</label>
              <input type="text" placeholder="" onChange={onChangeCounty} />

              <label htmlFor="">Oraș</label>
              <input type="text" placeholder="" onChange={onChangeCity} />
            </CompanyDetailsDiv>
            <h3>Reprezentant Legal</h3>
            <p>Aceste informații vor apărea în contract</p>
            <LegalRepresentativeContainer>
              <label htmlFor="">Titlu</label>
              <select name="" id="" onChange={onChangeTitle}>
                <option value="Dna.">Dna.</option>
                <option value="Dl.">Dl.</option>
              </select>

              <label htmlFor="">Nume</label>
              <input type="text" placeholder="" onChange={onChangeLastName} />

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
              Datele introduse vor fi folosite atât în contract, cât și pentru a identifica plățile în platforma noastră
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
