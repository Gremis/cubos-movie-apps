import styled from "styled-components";

export const PaginationContainer = styled.div`
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
      background-color: ${({ theme }) => theme.colors.primary10};
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
    background-color: ${({ theme }) => theme.colors.primary8};
    color: #fff;
    font-weight: bold;
  }
`;
