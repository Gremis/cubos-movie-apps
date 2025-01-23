import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>{`<`}</button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>{`>`}</button>
      )}
    </div>
  );
};

export default Pagination;
