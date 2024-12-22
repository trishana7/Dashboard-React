import React from "react";

type HeaderProps = {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
};

const Header: React.FC<HeaderProps> = ({ headingLevel = "h6", text }) => {
  const getTextSizeStyle = () => {
    const headingLevelSizes: { [key: string]: string } = {
      h1: "text-4xl",
      h2: "text-2xl",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-base",
      h6: "text-sm",
    };
    return headingLevelSizes[headingLevel] || "text-sm";
  };

  // Dynamically creating the correct element type
  const HeadingTag = headingLevel;

  return (
    <div
      className={`text-secondary-3 ${HeadingTag} font-bold ${getTextSizeStyle()}`}
    >
      {text}
    </div>
  );
};

export default Header;
