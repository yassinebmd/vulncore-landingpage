"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 px-4 sm:px-6 lg:px-8" >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2   rounded-full px-4 py-2 mb-6">
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        For a <span className="text-brand">Smarter</span> Cyber Future
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        VULNCTF is a cutting-edge Capture The Flag (CTF) platform designed to revolutionize
                        cybersecurity education and competition. Built for universities, enterprises, and cyber communities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            size="lg"
                            className="bg-brand hover:hover-bg-brand text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                        >
                            Request a Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>


                    </div>
                </div>
            </div>


        </section>
    );
};

