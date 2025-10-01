"use client";

import React from "react";
import { Button } from "./ui/button";
import { Shield, Users, Cloud, MessageSquare, Database, Cpu,  ArrowRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 text-sm font-medium">
                            Data Sheet | Technical Exercises
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        For a <span className="text-[#14B8A6]">Smarter</span> Cyber Future
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        VULNCTF is a cutting-edge Capture The Flag (CTF) platform designed to revolutionize
                        cybersecurity education and competition. Built for universities, enterprises, and cyber communities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            size="lg"
                            className="bg-[#14B8A6] hover:bg-[#136d63] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
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

