import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  asChild,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const finalClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (asChild) {
    // For wrapping links (e.g., <a>)
    return (
      <span className={finalClassName} {...props}>
        {children}
      </span>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

