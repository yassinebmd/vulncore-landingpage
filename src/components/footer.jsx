"use client";

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Mail, Globe } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className=" ">
            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Card className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl">
                        <CardContent className="p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Strengthen Your Cybersecurity ?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Secure your business with VulnCore's expertise and advanced cybersecurity solutions. Reach out today to protect your digital assets.              </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                                >
                                    Request a Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg font-semibold rounded-lg"
                                >
                                <Link href="/contact" >
                                    Contact Sales
                                </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">VULNCTF</h3>
                            <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <Globe className="h-4 w-4" />
                                    <span>www.vulncore.com</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <Mail className="h-4 w-4" />
                                    <span>sales@vulncore.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="text-gray-400 text-sm">
                                Copyright 2025 Vulncore. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
        </footer>
    );
};

