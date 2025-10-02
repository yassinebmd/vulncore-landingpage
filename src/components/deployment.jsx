"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Cloud, Server, GitBranch } from "lucide-react";

export const Deployment = ({id}) => {
  const deploymentOptions = [
    {
      title: "SaaS",
      icon: <Cloud className="h-12 w-12" />,
      description: "Cloud-based fully managed solution"
    },
    {
      title: "On-Premises",
      icon: <Server className="h-12 w-12" />,
      description: "Self-hosted in your infrastructure"
    },
    {
      title: "Hybrid",
      icon: <GitBranch className="h-12 w-12" />,
      description: "Flexible cloud and on-prem mix"
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Deployment Options
          </h2>
        </div>

        {/* Simple Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((option, index) => (
            <Card 
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group text-center">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <div className="text-cyan-400 group-hover:text-cyan-300">
                        {option.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                    {option.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300">
                    {option.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

