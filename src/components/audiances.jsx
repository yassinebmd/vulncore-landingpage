import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
    Trophy,
    Zap,
    Target
} from "lucide-react";
export const Audiences = () => {
    const features = [
        {
            icon: <Zap className="h-6 w-6" />,
            title: "For Organizations",
            description: "Enterprise-grade cybersecurity training and skill assessment for your teams."
        },
        {
            icon: <Trophy className="h-6 w-6" />,
            title: "For Universities",
            description: "Academic-focused cybersecurity education with comprehensive learning resources."
        },
        {
            icon: <Target className="h-6 w-6" />,
            title: "For Communities",
            description: "Community-driven competitions and collaborative learning environments."
        }
    ];

    return (
        <section className=" py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Audiences
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Built for diverse cybersecurity communities                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm border-gray-700 rounded-xl hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
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
            </div>


        </section>
    );
};

