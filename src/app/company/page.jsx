"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Zap, Users, Globe, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { NavBar } from "@/components/landingPage/NavBar";
import { Footer } from "@/components/landingPage/footer";



export default function AboutPage() {
    const stats = [
        { number: "150+", label: "Clients protected", icon: <Shield className="h-6 w-6" /> },
        { number: "10k+", label: "Vulnerabilities remediated", icon: <Target className="h-6 w-6" /> },
        { number: "24/7", label: "Monitoring & response", icon: <Zap className="h-6 w-6" /> },
        { number: "3", label: "Global locations", icon: <Globe className="h-6 w-6" /> }
    ];

    const missionItems = [
        "Shift-left secure design",
        "Automate recurring checks",
        "Partner closely with engineers"
    ];

    const visionItems = [
        "Security as a product quality bar",
        "Continuous assurance at scale",
        "Collaboration over gatekeeping"
    ];

    const services = [
        {
            title: "Offensive Security",
            description: "Red teaming, penetration testing, and adversary emulation to uncover real risks before attackers do.",
            icon: <Target className="h-8 w-8" />
        },
        {
            title: "Product Security",
            description: "Secure design reviews, SDLC hardening, SCA/SAST orchestration, and security architecture.",
            icon: <Shield className="h-8 w-8" />
        },
        {
            title: "Continuous Assurance",
            description: "Ongoing testing, monitoring, and remediation support integrated with your engineering workflows.",
            icon: <Zap className="h-8 w-8" />
        }
    ];

    const values = [
        { name: "Trust", description: "We earn it through transparency, empathy, and results." },
        { name: "Craft", description: "We obsess over details and solve root causes, not symptoms." },
        { name: "Velocity", description: "We move quickly without breaking security." },
        { name: "Partnership", description: "We act as an extension of your team, not a vendor." },
        { name: "Curiosity", description: "We research, learn, and share—constantly." },
        { name: "Impact", description: "We measure success by risk reduced and value delivered." }
    ];

    const locations = [
        { flag: "🇲🇦", country: "Morocco", address: "Rue Dakar IMM № 5 APPT № 1 l'Ocean Rabat", phone: "+212 70 81 47 004", email: "contact@vulncore.com" },
        { flag: "🇦🇪", country: "UAE", address: "Al Barsha 1, Dubai, UAE", phone: "+212 70 81 47 004", email: "contact@vulncore.com" },
        { flag: "🇬🇧", country: "United Kingdom", address: "100 High Street, London, UK", phone: "+212 70 81 47 004", email: "contact@vulncore.com" }
    ];

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0F172A] to-gray-900">
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-2 mb-8">
                            <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                            <span className="text-brand text-sm font-medium">ABOUT VULNCORE</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            We secure what matters so you can <span className="text-brand">build what's next</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Vulncore delivers offensive security, product security, and continuous assurance for modern organizations.
                            We combine expertise with automation to help you ship securely, faster.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group-hover:border-brand transition-all duration-300">
                                        <div className="text-brand mb-2 flex justify-center">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-y border-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mission & Vision</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                How we operate today and where we're headed tomorrow.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl">
                                            <Target className="h-6 w-6 text-brand" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                                    </div>
                                    <p className="text-gray-300 text-lg mb-6">
                                        Enable engineering teams to move fast and fearlessly by embedding security into every stage of the software lifecycle.
                                    </p>
                                    <ul className="space-y-3">
                                        {missionItems.map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-2 h-2 bg-brand rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-blue-500/10 rounded-xl">
                                            <Zap className="h-6 w-6 text-brand" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                                    </div>
                                    <p className="text-gray-300 text-lg mb-6">
                                        A world where secure-by-default products are the standard and breaches are the exception.
                                    </p>
                                    <ul className="space-y-3">
                                        {visionItems.map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-2 h-2 bg-brand rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Services that help you find, fix, and prevent risk across your SDLC.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                                >
                                    <CardContent className="p-8">
                                        <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-6 text-brand">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-y border-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                What guides how we build, ship, and partner with our customers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-3">{value.name}</h3>
                                        <p className="text-gray-300 text-sm">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Global Presence</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {locations.map((location, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-2xl">{location.flag}</span>
                                            <h3 className="text-xl font-bold text-white">{location.country}</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="h-5 w-5 text-brand mt-0.5" />
                                                <p className="text-gray-300 text-sm">{location.address}</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <Phone className="h-5 w-5 text-brand" />
                                                <span className="text-gray-300 text-sm">{location.phone}</span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-brand" />
                                                <span className="text-gray-300 text-sm">{location.email}</span>
                                            </div>

                                            <button className="flex items-center gap-2 text-brand hover-text-brand transition-colors text-sm font-medium mt-4">
                                                View on map
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};