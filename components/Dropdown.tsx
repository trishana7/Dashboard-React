import React, { useState, useRef, useEffect } from "react";

type DropdownProps = {
  options: string[];
  placeholder?: string;
  onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle option selection
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex w-44 justify-between px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          {selected || placeholder}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.356a.75.75 0 111.02 1.098l-4 3.625a.75.75 0 01-1.02 0l-4-3.625a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
          role="menu"
        >
          <ul className="py-1" role="none">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                role="menuitem"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
