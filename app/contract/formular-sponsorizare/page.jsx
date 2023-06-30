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
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyPosition, setCompanyPosition] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

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
    setLastName(e.currentTarget.value);
  }

  function onChangeFirstName(e) {
    setFirstName(e.currentTarget.value);
  }

  function onChangeEmail(e) {
    setEmail(e.currentTarget.value);
  }

  function onChangePhoneNumber(e) {
    setPhoneNumber(e.currentTarget.value);
  }

  function onChangeCompanyPosition(e) {
    setCompanyPosition(e.target.value);
    console.log(e.target.value);
  }

  function onChangeBankAccount(e) {
    setBankAccount(e.currentTarget.value);
  }

  function onChangeBankName(e) {
    setBankName(e.currentTarget.value);
  }

  function onChangeContractDate(e) {
    setDate(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  function onChangeAmount(e) {
    setAmount(e.currentTarget.value);
  }

  const formDetails = {
    companyNo: companyNo,
    companyReg: companyReg,
    companyAddress: companyAddress,
    postalCode: postalCode,
    county: county,
    city: city,
    title: title,
    lastName: lastName,
    firstName: firstName,
    email: email,
    phoneNumber: phoneNumber,
    companyPosition: companyPosition,
    bankAccount: bankAccount,
    bankName: bankName,
    date: date,
    amount: amount,
  };

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

              <label htmlFor="">Cod Postal</label>
              <input value={postalCode} type="text" placeholder="" onChange={onChangePostalCode} />

              <label htmlFor="">Județ</label>
              <input value={county} type="text" placeholder="" onChange={onChangeCounty} />

              <label htmlFor="">Oraș</label>
              <input value={city} type="text" placeholder="" onChange={onChangeCity} />
            </CompanyDetailsDiv>
            <h3>Reprezentant Legal</h3>
            <p>Aceste informații vor apărea în contract</p>
            <LegalRepresentativeContainer>
              <label htmlFor="">Titlu</label>
              <select value={title} name="" id="" onChange={onChangeTitle}>
                <option value="Dna.">Dna.</option>
                <option value="Dl.">Dl.</option>
              </select>

              <label htmlFor="">Nume</label>
              <input value={lastName} type="text" placeholder="" onChange={onChangeLastName} />

              <label htmlFor="">Prenume</label>
              <input value={firstName} type="text" placeholder="" onChange={onChangeFirstName} />

              <label htmlFor="">Email</label>
              <input value={email} type="email" placeholder="" onChange={onChangeEmail} />

              <label htmlFor="">Telefon</label>
              <input value={phoneNumber} type="tel" placeholder="" onChange={onChangePhoneNumber} />

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
            <h3>Date Bancare</h3>
            <p>
              Datele introduse vor fi folosite atât în contract, cât și pentru a identifica plățile în platforma noastră
            </p>
            <BankDetailsContainer>
              <label htmlFor="">Cont IBAN</label>
              <input value={bankAccount} type="text" placeholder="" onChange={onChangeBankAccount} />
              <label htmlFor="">Deschis la banca</label>
              <input value={bankName} type="text" placeholder="Nume Banca" onChange={onChangeBankName} />

              <h3>Completează data și suma</h3>

              <label htmlFor="">Data contractului</label>
              <input value={date} type="date" placeholder="" onChange={onChangeContractDate} />
              <label htmlFor="">Suma din contract</label>
              <input value={amount} placeholder="" onChange={onChangeAmount} />
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

// const [companyNo, setCompanyNo] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [companyReg, setCompanyReg] = useState("");
//   const [companyAddress, setCompanyAddress] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [county, setCounty] = useState("");
//   const [city, setCity] = useState("");
//   const [title, setTitle] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [companyPosition, setCompanyPosition] = useState("");
//   const [bankAccount, setBankAccount] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [date, setDate] = useState("");
//   const [amount, setAmount] = useState("");
