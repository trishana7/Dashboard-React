import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    const pages: number[] = [];
    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }
    return pages;
  };

  return (
    <nav className="flex justify-end items-center space-x-2 m-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {generatePageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage
              ? "bg-gray-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;
