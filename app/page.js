import Image from "next/image";
import styles from "./page.module.css";
import { Main } from "./components";
import { Header } from "./components/Header/Header";
import { AboutSection } from "./components/AboutSection/AboutSection";

export default function Home() {
  return (
    <Main>
      <Header />
      <AboutSection />
    </Main>
  );
}
