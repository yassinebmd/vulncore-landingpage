import { NavBar } from "@/components/landingPage/NavBar";
import { Footer } from "@/components/landingPage/footer";
import React from "react";

export default function AboutPage() {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0F172A] to-gray-900">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
            <span className="text-brand text-sm font-medium">ABOUT VULNCORE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Cybersecurity for a{" "}
            <span className="text-brand">Safer Digital World</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            At VulnCore, we provide cutting-edge cybersecurity solutions, helping businesses stay 
            secure, compliant, and prepared for any digital threat. From penetration testing to 
            managed security, we've got you covered.
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}