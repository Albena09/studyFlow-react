import React from "react";
import SectionHeader from "./shared/SectionHeader";

const HowItWorks = () => {
  const steps = [
    {
      title: "Set a goal",
      description: "This is the first step of the process.",
    },
    {
      title: "Break it intodaily task.",
      description: "This is the first step of the process.",
    },
    {
      title: "Track your progress.",
      description: "This is the first step of the process.",
    },
  ];

  return (
    <div className="container mx-auto p-[70px] space-y-4">
      <SectionHeader title={"How It Works"} />
      <div className="grid grid-cols-3 gap-4 ">
        {steps.map((steps, index) => {
          return (
            <div
              key={index}
              className="space-y-2 bg-white p-4 rounded-xl shadow-lg text-center"
            >
              <h1 className="font-bold text-4xl text-[#099759]">{index + 1}</h1>
              <h3 className="font-semibold text-2xl">{steps.title}</h3>
              <p>{steps.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
