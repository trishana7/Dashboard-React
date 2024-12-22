import React from "react";

type ButtonProps = {
  disabled?: boolean;
  buttonBorder?: boolean;
  block?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "gray";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  children?: React.ReactNode; // for slot
};

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  buttonBorder = false,
  block = false,
  variant = "primary",
  size = "md",
  children,
}) => {
  // Construct the className dynamically
  const getClassNames = () => {
    const classes = ["rounded-lg", "transition", "duration-300"];

    // Button border
    if (buttonBorder) classes.push("rounded-lg");

    // Full-width (block)
    if (block) classes.push("w-full");

    // Button size
    classes.push(`btn-${size}`);

    // Button variant
    classes.push(`btn-${variant}`);

    // Text size based on button size
    classes.push(size === "sm" ? "text-xs" : "text-sm");

    // Disabled state
    if (disabled) classes.push("cursor-not-allowed", "btn-disable");

    return classes.join(" ");
  };

  return (
    <button className={getClassNames()} disabled={disabled}>
      {children || "Submit"}
    </button>
  );
};

export default Button;
