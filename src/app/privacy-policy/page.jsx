"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, Calendar } from "lucide-react";
import { NavBar } from "@/components/landingPage/NavBar";
import { Footer } from "@/components/landingPage/footer";

export default function TermsAndConditions() {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <div className="p-3 bg-cyan-500/10 rounded-xl">
                                <Shield className="h-8 w-8 text-brand" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-brand" />
                                <span className="text-lg">Last updated: August 12, 2025

                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-brand" />
                                <span className="text-lg">contact@vulncore.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Terms Content */}
                    <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
                        <CardContent className="p-8">
                            <div className="prose prose-invert prose-lg max-w-none">
                                {/* Introduction */}
                                <div className="mb-8">
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        This Privacy Policy explains how Vulncore ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you use our website and services (collectively, the "Services"). If you do not agree with the terms of this policy, please do not use the Services.                                    </p>
                                </div>

                                {/* Section 1 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                                        Information We Collect
                                    </h2>
                                    <p className="text-gray-300 mb-4">We may collect the following types of information:</p>
                                    <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                        <li><span className="text-brand"> Information you provide:</span> such as name, email address, company, or message content when you contact us or submit forms.</li>
                                        <li><span className="text-brand">Usage data:</span> IP address, device and browser type, pages visited, referral URLs, and timestamps to help us understand how the Services are used.</li>
                                        <li><span className="text-brand">Cookies and tracking technologies:</span> small files stored on your device to enable core functionality, remember preferences, and analyze usage.</li>
                                    </ul>
                                </div>

                                {/* Section 2 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                                        How We Use Your Information
                                    </h2>
                                    <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                        <li>Provide, operate, and improve the Services</li>
                                        <li>Respond to inquiries and provide support</li>
                                        <li>Personalize user experience and content</li>
                                        <li>Monitor and analyze usage and trends</li>
                                        <li>Detect, prevent, and address security incidents and abuse</li>
                                        <li>Comply with legal obligations and enforce our terms</li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                                        Legal Bases for Processing (EEA/UK)
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        If you are located in the EEA or UK, we process your information under the following legal bases: performance of a contract, legitimate interests, compliance with legal obligations, and your consent (where applicable).
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                                        Sharing of Information
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We do not sell your personal information. We may share information with trusted service providers that help us operate the Services (e.g., hosting, analytics), under appropriate confidentiality and data protection terms. We may also disclose information if required by law or to protect rights, safety, and security.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                                        Data Retention
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We retain personal information only as long as necessary for the purposes described in this policy, to comply with our legal obligations, and to resolve disputes.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                                        Your Rights
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Depending on your location, you may have rights such as access, correction, deletion, portability, restriction, and objection. You may also withdraw consent where processing is based on consent.

                                        To exercise your rights, please contact us using the details below. We may take steps to verify your identity before fulfilling your request.
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                                        Cookies
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We use cookies and similar technologies to enable core site functionality, remember your preferences, and analyze usage. You can control cookies through your browser settings. Disabling cookies may affect certain features of the Services.                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                                        Security
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We implement reasonable technical and organizational measures designed to protect personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                                    </p>
                                </div>

                                {/* Section 9 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">9</span>
                                        International Data Transfers
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Your information may be transferred to and processed in countries other than your own. Where required, we use appropriate safeguards to protect your information in connection with such transfers.
                                    </p>
                                </div>

                                {/* Section 10 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">10</span>
                                        Children’s Privacy
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our Services are not directed to children under 13 (or the age required by local law), and we do not knowingly collect personal information from children.
                                    </p>
                                </div>

                                {/* Section 11 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">11</span>
                                        Changes to This Policy
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We may update this Privacy Policy from time to time. We will post the updated version with a new "Last updated" date. Your continued use of the Services after the effective date constitutes acceptance of the changes.
                                    </p>
                                </div>

                                {/* Section 12 */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">12</span>
                                        Contact Us
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        If you have questions about these Terms, please contact us at:{" "}
                                        <a href="mailto:contact@vulncore.com" className="text-brand hover-text-brand transition-colors">
                                            contact@vulncore.com
                                        </a>
                                    </p>
                                </div>

                                {/* Acceptance Note */}
                                <div className="mt-12 p-6 bg-gray-700/30 rounded-xl border-l-4 border-brand">
                                    <p className="text-gray-300 text-lg font-medium">
                                        By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    
                </div>
               
            </div>
             <Footer/>
        </>
    );
};