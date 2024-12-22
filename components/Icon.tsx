import React, { useMemo } from "react";
import * as Icons from "@/utils/iconUtils"; // Import Icons object

// Define the type for Icon names
export type IconName = keyof typeof Icons; // IconName will be 'home' | 'search' | 'settings' etc.

interface IconProps {
  iconName: IconName; // Use IconName type to restrict valid keys
  svgFill?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, svgFill = "fill-gray-1" }) => {
  // Retrieve the SVG string from the Icons object using the iconName prop
  const svgIcon = useMemo(() => Icons[iconName], [iconName]);

  // If no icon is found, return null or a fallback icon
  if (!svgIcon) {
    return null;
  }

  return (
    <div className="inline-block align-middle">
      <span
        dangerouslySetInnerHTML={{ __html: svgIcon }}
        className={`${svgFill} poke-transition`}
      />
    </div>
  );
};

export default Icon;
