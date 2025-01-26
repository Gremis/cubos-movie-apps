import React from "react";
import { PaginationContainer } from "../styles/PaginationStyles";
import ChevronLeftIcon from "../assets/icons/chevronleft.svg";
import ChevronRightIcon from "../assets/icons/chevronright.svg";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <img src={ChevronLeftIcon} alt="Chevron Left Icon" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
          disabled={page < currentPage}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <img src={ChevronRightIcon} alt="Chevron Right Icon" />
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
