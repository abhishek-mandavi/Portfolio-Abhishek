import React from 'react';

const ProjectCards = ({ project: { title, image, description, tags, webapp, github } }) => {
  return (
    <div className="flex flex-col w-[345px] h-[550px] rounded-[10px] bg-gradient-to-b from-[#576cbc] to-[#132a53] shadow-lg p-5">
      
      {/* Image */}
      <img className="w-full h-[180px] object-cover rounded-lg mb-4" src={image} alt={`Image of ${title}`} />

      {/* Title */}
      <h3 className="text-[22px] font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-[16px] text-white opacity-80 line-clamp-3 flex-grow">{description}</p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, id) => (
          <li key={id} className="text-sm text-white bg-violet-800 px-3 py-1 rounded-full">
            {tag}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="w-full mt-auto flex justify-between pt-4">
        <a href={webapp} className="text-white text-lg font-semibold bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
          Live
        </a>
        <a href={github} className="text-white text-lg font-semibold bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
