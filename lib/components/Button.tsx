import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
}) => {
  const baseStyles = "px-4 py-2 rounded";
  const styles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-black",
  };
  return <button className={`${baseStyles} ${styles[variant]}`}>{children}</button>;
};
