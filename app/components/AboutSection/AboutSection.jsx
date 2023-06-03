"use client";

import React from "react";
import {
  AboutContainer,
  AboutSectionContainer,
  AboutUsTitleContainer,
  FirstPostContainer,
  LineTitle,
  SecondPostContainer,
  TextContainer,
  ThirdPostContainer,
} from "./components";
import Image from "next/image";

import Charity1 from "../../../public/charity1.jpg";
import Charity2 from "../../../public/charity2.jpg";
import Charity3 from "../../../public/charity3.jpg";

export const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <AboutContainer>
        <AboutUsTitleContainer>
          <LineTitle></LineTitle>
          <h2>Despre Noi</h2>
        </AboutUsTitleContainer>
        <FirstPostContainer>
          <Image
            src={Charity1}
            width={360}
            height={220}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <TextContainer>
            <h3>Cine suntem</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              consectetur rerum? Consequatur possimus natus iure. Cumque ullam
              recusandae fugiat error ab, id, officia illum itaque praesentium
              minus qui maiores officiis! Temporibus eveniet enim atque aut
              dolore debitis nam tempora est.
            </span>
          </TextContainer>
        </FirstPostContainer>
        <SecondPostContainer>
          <TextContainer>
            <h3>Ajutam batranii</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              consectetur rerum? Consequatur possimus natus iure. Cumque ullam
              recusandae fugiat error ab, id, officia illum itaque praesentium
              minus qui maiores officiis! Temporibus eveniet enim atque aut
              dolore debitis nam tempora est.
            </span>
          </TextContainer>
          <Image
            src={Charity2}
            width={360}
            height={220}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
        </SecondPostContainer>
        <ThirdPostContainer>
          <Image
            src={Charity3}
            width={360}
            height={220}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <TextContainer>
            <h3>Ajutam bolnavii</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              consectetur rerum? Consequatur possimus natus iure. Cumque ullam
              recusandae fugiat error ab, id, officia illum itaque praesentium
              minus qui maiores officiis! Temporibus eveniet enim atque aut
              dolore debitis nam tempora est.
            </span>
          </TextContainer>
        </ThirdPostContainer>
      </AboutContainer>
    </AboutSectionContainer>
  );
};
