import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "../assets/icons/chevronleft.svg";
import ChevronRightIcon from "../assets/icons/chevronright.svg";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      font-weight: bold;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.textSecondary};
      cursor: not-allowed;
    }

    img {
      width: 16px;
      height: 16px;
    }
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
