import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className ?? ""}`}>
      {children}
    </div>
  );
};

// keep default export too so `import Card from "..."` works
export default Card;


