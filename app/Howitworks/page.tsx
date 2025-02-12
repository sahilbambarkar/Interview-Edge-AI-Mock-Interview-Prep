"use client";

import React from "react";
import { Bot, UserCheck, Settings, Play, Send, ChartBar, Repeat } from "lucide-react";

const HowItWorksPage = () => {
    const steps = [
        {
            icon: <UserCheck size={48} className="text-primary" />,
            title: "Sign Up or Log In",
            description: "Join our community or log in! Build a personalized profile to track your progress and set your preferences."
        },
        {
            icon: <Settings size={48} className="text-primary" />,
            title: "Choose Your Interview Type",
            description: "Tailor your practice! Select from technical, behavioral, or mixed interviews and customize the difficulty to match your goals."
        },
        {
            icon: <Play size={48} className="text-primary" />,
            title: "Start the Mock Interview",
            description: "Get ready! Our AI uses Gemini to generate dynamic, relevant questions, keeping you engaged and focused."
        },
        {
            icon: <Send size={48} className="text-primary" />,
            title: "Submit Your Answers",
            description: "Share your insights! Respond easily via text or multiple-choice and let our AI track your progress seamlessly."
        },
        {
            icon: <ChartBar size={48} className="text-primary" />,
            title: "Receive Real-Time Feedback",
            description: "Unlock your potential! Get instant AI-powered analysis, understand your strengths, and identify areas for improvement with detailed scoring."
        },
        {
            icon: <Repeat size={48} className="text-primary" />,
            title: "Continue Practicing",
            description: "Master your skills! Access your interview history, track your progress, and refine your skills with unlimited mock interviews and personalized challenges."
        }
    ];


    return (

        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    <Bot className="inline-block mr-3 text-primary" size={48} />
                   Interview Edge AI
                </h1>
                <p className="text-xl text-gray-600">
                    Master your interviews with AI-powered practice and personalized insights
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div
                        key={step.title}
                        className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
                    >
                        <div className="flex items-center mb-4">
                            {step.icon}
                            <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                                Step {index + 1}: {step.title}
                            </h2>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="/dashboard"
                    className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-[#521a8a] transition-colors"
                >
                    Start Your Interview Journey
                </a>
            </div>
        </div>
    );
};

export default HowItWorksPage;