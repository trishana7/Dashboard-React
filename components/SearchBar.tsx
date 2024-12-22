import React, { useState } from "react";
import Icon from "./Icon";

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center w-full max-w-xs  bg-white border border-gray-300 rounded-md shadow-sm">
      <input
        type="text"
        value={query}
        onInput={handleInputChange}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 text-sm text-gray-700 bg-transparent border-none focus:outline-none"
      />

      <div onClick={handleSearch} className="py-1 px-2">
        <Icon iconName="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
