import React from "react";

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="about">
      <h2 className="text-4xl font-bold text-center text-white mb-10">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* About Image */}
        <img
          src="/assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className="w-full max-w-md rounded-lg shadow-lg"
        />

        {/* About Items */}
        <ul className="flex flex-col gap-8">
          {aboutData.map(({ title, description, icon }, index) => (
            <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 shadow-md">
              <img src={icon} alt={title} className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// About Data Array (For Clean Code)
const aboutData = [
  {
    title: "Academic",
    description: "Holds a Bachelor’s degree in Electronics and Telecommunications from Kalinga Institute of Industrial Technology, Bhubaneshwar (Graduated in 2023).",
    icon: "/assets/about/cursorIcon.png",
  },
  {
    title: "Full-Stack Developer",
    description: "Designed multiple frontend landing pages and developed responsive, high-performance websites with a strong focus on user experience and modern web technologies. Also experienced in building fast, optimized back-end systems and APIs for seamless functionality.",
    icon: "/assets/about/serverIcon.png",
  },
  {
    title: "Others",
    description: "Proficient in object-oriented programming, algorithm development, data structures, problem-solving, and complexity analysis. Deep understanding of database principles, including efficient querying and SQL optimization. Strong interpersonal and communication skills, enabling effective collaboration in team environments.",
    icon: "/assets/about/cursorIcon.png",
  },
];

export default About;
