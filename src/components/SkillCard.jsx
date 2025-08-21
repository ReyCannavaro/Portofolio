import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
      <h4 className="text-gray-800 text-sm font-semibold text-center">{skill.name}</h4>
      <p className="text-gray-500 text-xs text-center">{skill.type}</p>
    </div>
  );
};

export default SkillCard;