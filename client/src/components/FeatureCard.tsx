import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  isActive,
}) => {
  return (
    <div
      className={`col-span-1 bg-stone-200/10 backdrop-blur-sm shadow-xl p-3 rounded-xl flex flex-col gap-2 justify-center items-center min-h-80 min-w-50 transition duration-300 ${
        isActive
          ? "ring-2 ring-rose-500 scale-120 border-2 border-rose-500 shadow-xl z-30 hover:scale-125 transform"
          : "opacity-20 z-20"
      } dark:border-stone-400 dark:ring-stone-400`}
    >
      <div
        className={`
        w-20 h-20 mb-4 flex items-center justify-center 
        transition-transform duration-500 
        ${isActive ? "scale-100" : "scale-90"}
      `}
      >
        {icon}
      </div>
      <h1 className="text-2xl text-center text-stone-500 font-semibold tracking-tight dark:text-stone-400">
        {title}
      </h1>
      <p className="text-sm text-balance text-stone-600 font-thin tracking-tighter text-justify px-2 dark:text-stone-200">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
