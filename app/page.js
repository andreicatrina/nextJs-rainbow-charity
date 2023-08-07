import { Main } from "./components";
import { Header } from "./components/Header/Header";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { DonationsSection } from "./components/DonationsSection/DonationsSection";
import { Footer } from "./components/Footer/Footer";
import { LandingSection } from "./components/LandingSection/LandingSection";

export default function Home() {
  return (
    <Main>
      <Header />
      <LandingSection />
      <AboutSection />
      <DonationsSection />
      <Footer />
    </Main>
  );
}
