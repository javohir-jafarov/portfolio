import React from 'react'

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Sass", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 45 },
    { name: "NodeJS", level: 40 },
    { name: "Python", level: 40 },
  ];

  const tools = ["GitHub", "VS Code", "Firefox", "Netlify", "Linux"];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">

      {/* SKILLS */}
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* TOOLS */}
      <h2 className="text-3xl font-bold mt-14 mb-6">Tools</h2>

      <div className="flex flex-wrap gap-3">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-800 rounded-lg text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}


