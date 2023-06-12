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
          {/* <LineTitle></LineTitle> */}
          <h2>Despre Noi</h2>
        </AboutUsTitleContainer>
        <FirstPostContainer>
          <Image
            src={Charity1}
            width={480}
            height={360}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              filter: "grayscale(100)",
            }}
          />
          <TextContainer>
            <h3>Cine suntem</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              eos in hic soluta officia nam similique, officiis accusantium,
              voluptatem placeat incidunt eveniet. Consequatur eveniet, eos
              praesentium atque earum rem! Quaerat nihil nemo aliquam tempore
              ratione ipsam modi quo rem maiores, laborum eius blanditiis ipsa
              nulla earum natus a provident! Laborum incidunt quae provident
              quisquam magni nemo saepe iusto doloremque non quidem hic
              voluptatum dolore similique inventore, qui sequi magnam
              cupiditate, commodi odit sapiente laboriosam numquam eius earum.
              Ex esse incidunt facilis voluptatum eaque eos provident,
              reprehenderit, iure quasi laboriosam voluptate. Eaque esse
              quibusdam porro in molestias ad hic unde debitis?
            </span>
          </TextContainer>
        </FirstPostContainer>
        <SecondPostContainer>
          <TextContainer>
            <h3>Ne pasa de bătrâni</h3>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              laudantium explicabo obcaecati odio iusto incidunt! Amet similique
              nemo facere voluptatem magnam earum qui corporis repellendus omnis
              beatae vero commodi explicabo adipisci tempore ipsum, asperiores
              eligendi laborum dolorum, inventore deserunt et illo laudantium
              corrupti culpa! Inventore velit laudantium aliquam placeat facere
              illum. Et praesentium, nam ullam provident quaerat doloremque
              animi fugiat architecto quasi minima ut suscipit adipisci
              distinctio alias eaque sapiente aperiam explicabo nulla nostrum
              aspernatur deserunt perferendis sit odit dicta! A, aut deserunt
              autem nisi natus tenetur facere. Tempore hic provident fuga
              aliquid, facilis error laborum dicta eos iusto pariatur?
            </span>
          </TextContainer>
          <Image
            src={Charity2}
            width={480}
            height={360}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "480px",
              filter: "grayscale(80)",
            }}
          />
        </SecondPostContainer>
        <ThirdPostContainer>
          <Image
            src={Charity3}
            width={480}
            height={360}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "480px",
            }}
          />
          <TextContainer>
            <h3>Luptam cu suferinta</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, aspernatur beatae. Ad assumenda id perspiciatis
              beatae? Natus id esse, at exercitationem repellat quaerat ipsum
              libero dicta ab. Similique, quas fugiat aspernatur minus, velit
              consequatur aperiam possimus alias dicta amet quos incidunt sunt
              quod suscipit et recusandae, quia mollitia voluptate molestias.
              Nemo, beatae libero error dolores recusandae quod nobis officia
              corporis labore hic, soluta nostrum sit repellat aliquid qui
              maxime odit distinctio modi id perferendis? Itaque corrupti,
              nostrum fuga, quidem consectetur corporis maxime, iure repudiandae
              reiciendis eos molestias laboriosam. Fuga architecto iusto eius
              perspiciatis quod, porro in quos molestias sed blanditiis.
            </span>
          </TextContainer>
        </ThirdPostContainer>
      </AboutContainer>
    </AboutSectionContainer>
  );
};
