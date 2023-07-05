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
  ThankYouParagraph,
} from "./components";

export default function Formpage() {
  const [companyNo, setCompanyNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyReg, setCompanyReg] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [companyPosition, setCompanyPosition] = useState("");

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

  function onChangeLastName(e) {
    setLastName(e.currentTarget.value);
  }

  function onChangeFirstName(e) {
    setFirstName(e.currentTarget.value);
  }

  function onChangeCompanyPosition(e) {
    setCompanyPosition(e.target.value);
    console.log(e.target.value);
  }

  // const formDetails = {
  //   companyNo: companyNo,
  //   companyReg: companyReg,
  //   companyAddress: companyAddress,
  //   postalCode: postalCode,
  //   county: county,
  //   city: city,
  //   title: title,
  //   lastName: lastName,
  //   firstName: firstName,
  //   email: email,
  //   phoneNumber: phoneNumber,
  //   companyPosition: companyPosition,
  //   bankAccount: bankAccount,
  //   bankName: bankName,
  //   date: date,
  //   amount: amount,
  // };

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
              <input value={companyReg} type="text" placeholder="Ex: J17/1729/2018" onChange={onChangeReg} />

              <label htmlFor="">Adresa</label>
              <input value={companyAddress} type="text" placeholder="Strada, Nr." onChange={onChangeCompanyAddress} />
            </CompanyDetailsDiv>
            <h3>Reprezentant Legal</h3>
            <p>Aceste informații vor apărea în contract</p>
            <LegalRepresentativeContainer>
              <label htmlFor="">Nume</label>
              <input value={lastName} type="text" placeholder="" onChange={onChangeLastName} />

              <label htmlFor="">Prenume</label>
              <input value={firstName} type="text" placeholder="" onChange={onChangeFirstName} />

              <label htmlFor="">Poziția în cadrul companiei</label>
              <select value={companyPosition} name="" id="" onChange={onChangeCompanyPosition}>
                <option value="Administrator">Administrator</option>
                <option value="Director">Director</option>
                <option value="Director General">Director General</option>
                <option value="Director Executiv">Director Executiv</option>
                <option value="Asociat">Asociat</option>
                <option value="Presedinte">Presedinte</option>
                <option value="Vicepresedinte">Vicepresedinte</option>
                <option value="Reprezentant Legal">Reprezentant Legal</option>
              </select>
            </LegalRepresentativeContainer>
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
