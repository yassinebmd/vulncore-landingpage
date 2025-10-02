"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import { NavBar } from "@/components/NavBar";

const ContactPage = () => {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] ">
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Contact <span className="text-cyan-400">Our Team</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to enhance your cybersecurity training? Our experts are here to help you 
            implement the perfect solution for your organization.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name</label>
                      <Input 
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <Input 
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input 
                      type="email"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Company</label>
                    <Input 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <Textarea 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 min-h-[120px]"
                      placeholder="Tell us about your cybersecurity training needs..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email Us</h4>
                        <p className="text-gray-300">sales@vulncore.com</p>
                        <p className="text-gray-300 text-sm">Typically replies within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg">
                        <Phone className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Call Us</h4>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-gray-300 text-sm">Mon-Fri from 8am to 6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                        <p className="text-gray-300">123 Cyber Security Ave</p>
                        <p className="text-gray-300">San Francisco, CA 94105</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose VULNCTF?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">24/7 technical support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Global deployment options</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>

    </>
  );
}

export default ContactPage;