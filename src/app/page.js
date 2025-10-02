import Image from "next/image";
import {NavBar} from "../components/NavBar.jsx";
import { HeroSection } from "@/components/Hero-section.jsx";
import { FeaturesSection } from "@/components/features.jsx";
import { Challenges } from "@/components/chalenges.jsx";
import { Audiences } from "@/components/audiances.jsx";
import { Deployment } from "@/components/deployment.jsx";
import { Footer } from "@/components/footer.jsx";

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection />
    <FeaturesSection id="features" />
    <Challenges />
    <Audiences id="audiences"/>
    <Deployment id="deployment"/>
    <Footer/>
    </>
  );
}
