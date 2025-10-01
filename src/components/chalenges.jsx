"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
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

export const Challenges = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Challenge Management",
      subtitle: "Intuitive Creation & Automation",
      description: "Quickly build, deploy, and scale cybersecurity challenges with automated provisioning and user-friendly interface."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Comprehensive Coverage",
      subtitle: "All Major Categories Supported",
      description: "Covering Web, Crypto, Pwn, Forensics, Reverse Engineering - ensuring realistic, full-spectrum training."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Insightful Analytics",
      subtitle: "Performance Tracking & Metrics",
      description: "Real-time dashboards and detailed analytics provide deep insights into participant performance."
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: "Flexible Integration",
      subtitle: "Customizable & Extensible",
      description: "White-label branding, mobile-friendly design, and robust API make VULNCTF highly adaptable."
    }
  ];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-600 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 flex-shrink-0">
                    <div className="text-cyan-400 group-hover:text-cyan-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                        {feature.title}
                      </h3>
                      <h4 className="text-cyan-400 text-lg font-semibold">
                        {feature.subtitle}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

   
    </section>
  );
};

