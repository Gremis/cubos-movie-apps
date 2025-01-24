import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "../assets/icons/chevronleft.svg";
import ChevronRightIcon from "../assets/icons/chevronright.svg";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 24px 0;

  button {
    padding: 12.5px 20px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary9};
    color: ${({ theme }) => theme.colors.secondary12};
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
      color: ${({ theme }) => theme.colors.secondaryAlpha9};
    }

    img {
      width: 16px;
      height: 16px;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: bold;
  }
`;

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
