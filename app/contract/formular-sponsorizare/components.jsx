import styled from "styled-components";

export const Main = styled.main``;

export const FormPageSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #ffb600;
`;

export const FormPageContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  padding: 24px;
  /* background-color: #ffb600; */

  h2 {
    color: #4a4f54;
    font-weight: 700;
    padding: 24px 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  margin-top: 48px;
  background-color: #fff;
  border: 4px solid #fa5a0a;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;

  h3 {
    display: flex;
    justify-content: center;
    color: #4a4f54;
    font-weight: 700;
    padding: 24px 8px;
  }

  p {
    color: #4a4f54;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    max-width: 480px;
  }
`;

export const CompanyDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;

  label {
    margin: 6px 0;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
  }

  input {
    height: 32px;
    padding: 0 8px;
    width: 100%;
    max-width: 480px;
    border: none;
    border-radius: 8px;
    color: #4a4f54;
    background-color: #f0f1f3;
    border: 1px solid #4a4f54;
    font-weight: 600;
  }
`;

export const LegalRepresentativeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;

  label {
    margin: 6px 0;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
  }

  input {
    height: 32px;
    padding: 0 8px;
    width: 100%;
    max-width: 480px;
    border: none;
    border-radius: 8px;
    color: #4a4f54;
    background-color: #f0f1f3;
    border: 1px solid #4a4f54;
    font-weight: 600;
  }

  select {
    height: 32px;
    width: 100%;
    padding: 0 8px;
    max-width: 480px;
    border: none;
    border-radius: 8px;
    background-color: #f0f1f3;
    border: 1px solid #4a4f54;
    color: #4a4f54;
    font-weight: 600;
  }
`;

export const BankDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;

  label {
    margin: 6px 0;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
  }

  input {
    height: 32px;
    padding: 0 8px;
    width: 100%;
    max-width: 480px;
    border: none;
    border-radius: 8px;
    color: #4a4f54;
    background-color: #f0f1f3;
    border: 1px solid #4a4f54;
    font-weight: 600;
  }
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  max-width: 490px;
  display: flex;
  justify-content: center;
  padding: 32px 8px;

  button {
    height: 40px;
    width: 100%;
    max-width: 200px;
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: #fa5a0a;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    transition: 0.6s;
    cursor: pointer;

    :hover {
      background-color: #fff;
      color: #fa5a0a;
      border: 2px solid #fa5a0a;
    }
  }
`;
