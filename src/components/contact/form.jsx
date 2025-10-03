"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MessageCircle, Send } from "lucide-react";

export const ContactForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      email: emailRef.current?.value || "",
      company: companyRef.current?.value || "",
      message: messageRef.current?.value || ""
    };
    
    console.log("Form Data:", formData);

    event.target.reset();
    
    alert("Message sent successfully!");
  };

  return (
    <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 rounded-2xl">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <MessageCircle className="h-6 w-6 text-brand" />
          </div>
          <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">First Name</label>
              <Input
                ref={firstNameRef}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Last Name</label>
              <Input
                ref={lastNameRef}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <Input
              ref={emailRef}
              type="email"
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
              placeholder="your.email@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Company</label>
            <Input
              ref={companyRef}
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Message</label>
            <Textarea
              ref={messageRef}
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 min-h-[120px]"
              placeholder="Tell us about your cybersecurity training needs..."
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-brand hover-bg-brand text-white py-3 text-lg font-semibold transition-colors duration-200"
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};