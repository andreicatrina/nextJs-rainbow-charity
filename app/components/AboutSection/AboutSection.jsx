"use client";

import React from "react";
import {
  AboutContainer,
  AboutSectionContainer,
  AboutUsTitleContainer,
  FirstPostContainer,
  FourthPostContainer,
  LineTitle,
  SecondPostContainer,
  TextContainer,
  ThirdPostContainer,
} from "./components";
import Image from "next/image";

import Charity1 from "../../../public/charity1.jpg";
import Charity2 from "../../../public/charity2.jpg";
import Charity3 from "../../../public/charity3.jpg";
import Charity5 from "../../../public/charity5.jpg";

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
              objectFit: "cover",
              filter: "grayscale(100)",
            }}
          />
          <TextContainer>
            <h3>Cine suntem</h3>
            <span>
              Asociatia "Curcubeul Prieteniei" se ocupa cu organizarea de
              diverse actiuni umanitare pentru ajutorarea celor in nevoie (ex: o
              masa calda, tabara pentru copiii saraci, achizitionarea de
              materiale didactice pentru copiii fara posibilitati financiare,
              orfani, bolnavi, spectacole pentru copiii din familiile sarace sau
              orfelinate, batrani din azile sau case de batrani). Implementarea
              din punct de vedere logistic ale unor proiecte de mai mare
              anvergura de genul: constructia si/sau amenajarea unor cladiri
              care sa deserveasca orfelinate, azile de batrani, centre sociale,
              cazare pentru oamenii fara adapost si centre de dezintoxicare.
            </span>
          </TextContainer>
        </FirstPostContainer>
        <SecondPostContainer>
          <TextContainer>
            <h3>Ne pasă de bătrâni</h3>
            <span>
              Stim cu totii ca batranii de acum au fost candva tineri si in
              putere. Au muncit, contribuit si construit lumea in care traim
              astazi. Unii dintre ei sunt intr-o situatie vulnerabila astazi din
              diferite cauze. Asociatia "Curcubeul Prieteniei" incearca sa le
              ofere batranilor un pic de liniste sufleteasca si sa le usureze
              greutatile oferindu-le un acoperis deasupra capului, o masa calda,
              haine, produse de ingrijire personala, asistenta medicala si
              uneori chiar si companie.
            </span>
          </TextContainer>
          <Image
            src={Charity2}
            width={480}
            height={360}
            style={{
              objectFit: "cover",
              filter: "grayscale(0)",
            }}
          />
        </SecondPostContainer>
        <ThirdPostContainer>
          <Image
            src={Charity3}
            width={480}
            height={360}
            style={{
              objectFit: "cover",
            }}
          />
          <TextContainer>
            <h3>Luptăm cu suferința</h3>
            <span>
              Ajutorarea bolnavilor grav in orice demers necesar imbunatatirii
              starii de sanatate (donatii, sprijin logistic atat in tara, cat si
              in strainatate).
            </span>
          </TextContainer>
        </ThirdPostContainer>
        <FourthPostContainer>
          <TextContainer>
            <h3>Educația lor este esențială</h3>
            <span>
              "Copiii sunt viitorul!" <br /> Daca ei sunt viitorul, atunci hai
              sa le oferim si un start bun in viata. Exista multi copii in
              Romania care provin din familii cu posibilitati financiare reduse.
              Acesti copii, de multe ori, nici nu ajung la scoala, iar daca
              ajung nu au toate cele necesare la scoala sau acasa. Asociatia
              "Curcubeul Prieteniei" isi ia angajamentul sa ajute cat mai multi
              copii sa mearga la scoala.
            </span>
          </TextContainer>
          <Image
            src={Charity5}
            width={480}
            height={360}
            style={{
              objectFit: "cover",
            }}
          />
        </FourthPostContainer>
      </AboutContainer>
    </AboutSectionContainer>
  );
};
