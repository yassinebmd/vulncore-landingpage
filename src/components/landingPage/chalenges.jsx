"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Settings,
  Globe,
  BarChart3,
  Puzzle,
  Zap,
  Shield,
  Cpu,
  Users
} from "lucide-react";

export const Challenges = ({ id }) => {
  const features = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Challenge Management",
      description: "Quickly build, deploy, and scale cybersecurity challenges with automated provisioning and user-friendly interface."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Comprehensive Coverage",
      description: "Covering Web, Crypto, Pwn, Forensics, Reverse Engineering - ensuring realistic, full-spectrum training."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Insightful Analytics",
      description: "Real-time dashboards and detailed analytics provide deep insights into participant performance and challenge effectiveness."
    },
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Flexible Integration",
      description: "White-label branding, mobile-friendly design, seamless tool integrations, and robust API make VulncoreCTF highly adaptable."
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Challenge Management Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, deploy, and analyze cybersecurity challenges at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border-gray-700 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-brand">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <span className="text-lg font-medium text-white">
            Deployment Options: SaaS | On-Premises | Hybrid
          </span>
        </div>
      </div>
    </section>
  );
};