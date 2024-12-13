import React from "react";

const skills = [
  { name: "HTML", icon: "🌐", description: "Markup for web structure." },
  { name: "CSS", icon: "🎨", description: "Styling and layouts." },
  {
    name: "JavaScript",
    icon: "📜",
    description: "Dynamic and interactive logic.",
  },
  {
    name: "TypeScript",
    icon: "🛠️",
    description: "Typed JavaScript for scalable code.",
  },
  {
    name: "Bootstrap",
    icon: "📦",
    description: "Predefined styles and components.",
  },
  {
    name: "Tailwind CSS",
    icon: "⚡",
    description: "Utility-first CSS framework.",
  },
  { name: "React", icon: "⚛️", description: "UI library for modern web apps." },
  {
    name: "Next.js 14",
    icon: "🚀",
    description: "React framework with advanced features.",
  },
];

const Skills = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-purple-500 text-center mb-8 ">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
