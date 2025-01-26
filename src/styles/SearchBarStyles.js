import styled from "styled-components";

export const SearchForm = styled.form`
  width: 100%;
  max-width: 488px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary7};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary2};

  input {
    flex: 1;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.secondary9};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary9};
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary9};
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
