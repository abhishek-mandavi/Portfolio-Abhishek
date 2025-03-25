import React from 'react'
import { skills } from '../../data/constants'

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center relative z-[1] px-4">
      <div className="max-w-[1100px] w-full flex flex-col items-center gap-6 text-center">
            {/* Title */}
            <h2 className="text-4xl font-semibold mt-5 text-primary sm:text-3xl text-white">
             Skills
            </h2>
            <p className="text-lg text-secondary max-w-[600px] sm:text-base">
             Here are some of my skills on which I have been working on.
            </p>

            {/* Skills Container */}
            <div className="flex flex-wrap justify-center gap-8 mt-6 w-full">
                {skills.map((skill, index) => (
                    <div
                    key={index}
                    className="max-w-[500px] w-full bg-card border border-purple-500 shadow-lg rounded-xl p-6 sm:max-w-[400px] xs:max-w-[330px]"
                    >
                    <h3 className="text-2xl font-semibold text-secondary text-center mb-4">
                        {skill.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skill.skills.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 text-primary border border-primary/80 px-4 py-2 rounded-lg text-base font-medium sm:text-sm sm:px-3 sm:py-1.5"
                        >
                            <img src={item.image} alt={item.name} className="w-6 h-6" />
                            {item.name}
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
      </div>
    </section>
  )
}

export default Skills

