import { Audiences } from "@/components/landingPage/audiances";
import { Challenges } from "@/components/landingPage/chalenges";
import { NavBar } from "@/components/landingPage/NavBar";
import { HeroSection } from "@/components/landingPage/Hero-section";
import { FeaturesSection } from "@/components/landingPage/features";
import { Footer } from "@/components/landingPage/footer";
import { Deployment } from "@/components/landingPage/deployment";


export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection id="features" />
      <Challenges />
      <Audiences id="audiences" />
      <Deployment id="deployment" />
      <Footer />
    </>
  );
}
