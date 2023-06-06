import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
`;

export const FooterLineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterLine = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  max-width: 1200px;
  height: 48px;
  margin-bottom: 48px;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  h3 {
    display: flex;
    justify-content: center;
    padding: 12px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const CasesPhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  a {
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 2px 6px;

    margin-top: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
export const DonationsPhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  a {
    font-size: 18px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 2px 6px;

    margin-top: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const CasesMail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  a {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid gray;
    padding: 2px 6px;
    border-radius: 6px;
    margin-top: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
export const CasesDonations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  a {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid gray;
    padding: 2px 6px;
    border-radius: 6px;
    margin-top: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h3 {
    padding: 0 12px;
  }
`;

export const FacebookLink = styled.a`
  svg {
    color: #1877f2;
    width: 32px;
    height: 32px;
    transition: 0.6s;
  }

  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
export const InstagramLink = styled.a`
  svg {
    color: #c32aa3;
    width: 32px;
    height: 32px;
    transition: 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
export const WhatsappLink = styled.a`
  svg {
    color: #25d366;
    width: 32px;
    height: 32px;
    transition: 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
export const GoogleMapsLink = styled.a`
  svg {
    color: #ea4335;
    width: 32px;
    height: 32px;
    transition: 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
