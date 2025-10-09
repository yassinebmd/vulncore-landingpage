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
              <h1 className="text-4xl md:text-5xl font-bold text-white">Terms and Conditions</h1>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand" />
                <span className="text-lg">Last updated: August 12, 2025</span>
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
                    These Terms and Conditions ("Terms") govern your access to and use of the Vulncore website, content, products, and services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Eligibility
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    You must be at least the age of majority in your jurisdiction to use the Services. By using the Services, you represent and warrant that you meet this requirement and that you have the authority to accept these Terms.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Accounts and Security
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    You may need an account to access certain features. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use or security breach.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Acceptable Use
                  </h2>
                  <p className="text-gray-300 mb-4">You agree not to:</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Use the Services for unlawful, harmful, or fraudulent purposes</li>
                    <li>Interfere with or disrupt the integrity or performance of the Services</li>
                    <li>Attempt to gain unauthorized access to the Services or related systems or networks</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                    <li>Use automated means to access the Services in a manner that burdens our systems</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Intellectual Property
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    The Services, including text, graphics, logos, trademarks, and software, are owned by or licensed to Vulncore and are protected by intellectual property laws. Except as expressly permitted, you may not copy, modify, distribute, sell, or lease any part of the Services.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                    Third-Party Services and Links
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    The Services may contain links to third-party websites or integrate with third-party services. We do not control and are not responsible for the content, policies, or practices of third parties. Your use of third-party services is at your own risk and may be subject to separate terms.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                    Disclaimers
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    The Services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, secure, or error-free.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, Vulncore and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                    Indemnification
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    You agree to defend, indemnify, and hold harmless Vulncore and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your use of the Services or your violation of these Terms.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">9</span>
                    Suspension and Termination
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may suspend or terminate your access to the Services at any time, with or without notice, if we believe you have violated these Terms or if we consider it necessary to protect the Services, users, or third parties.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">10</span>
                    Governing Law and Jurisdiction
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms are governed by the laws of the jurisdiction in which Vulncore is established, without regard to conflict of law principles. You agree to the exclusive jurisdiction of the courts located in that jurisdiction for the resolution of any disputes.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">11</span>
                    Changes to These Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update these Terms from time to time. We will post the updated version with a new "Last updated" date. Your continued use of the Services following the effective date constitutes acceptance of the updated Terms.
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