"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Mail, Globe, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            {/* CTA Section */}
            <section className="w-full py-20 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="space-y-8">
                            {/* Heading with larger font and better spacing */}
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                    Ready to Strengthen<br />
                                    <span className="text-brand">Your Cybersecurity?</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Secure your business with VulnCore's expertise and advanced cybersecurity solutions. Reach out today to protect your digital assets.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center ">
                                <Button
                                    size="lg"
                                    className="bg-brand hover-bg-brand text-white px-12 py-8 text-xl font-semibold rounded-2xl transition-all duration-200 hover:scale-105 shadow-2xl"
                                    
                                >
                                    <Link href="/contact" >Contact Sales</Link>
                                    <ArrowRight className="ml-3 h-6 w-6" />
                                </Button>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Links */}
            <div className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Company */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/about" className="hover:text-brand transition-colors">About</Link></li>
                                <li><Link href="/features" className="hover:text-brand transition-colors">Features</Link></li>
                                <li><Link href="/pricing" className="hover:text-brand transition-colors">Pricing</Link></li>
                                <li><Link href="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/docs" className="hover:text-brand transition-colors">Documentation</Link></li>
                                <li><Link href="/blog" className="hover:text-brand transition-colors">Blog</Link></li>
                                <li><Link href="/support" className="hover:text-brand transition-colors">Support</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Contact</h4>
                            <div className="space-y-3 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span>sales@vulncore.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4" />
                                    <span>www.vulncore.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                Copyright 2025 Vulncore. All Rights Reserved
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-brand transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-brand transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-brand transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};