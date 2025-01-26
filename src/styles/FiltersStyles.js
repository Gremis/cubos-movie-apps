import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 73px 24px 0;
  flex-wrap: wrap;
  gap: 1rem;

  select {
    width: 100%;
    max-width: 237px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.secondary7};
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.secondary2};
    color: ${({ theme }) => theme.colors.secondary7};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    cursor: pointer;
    background-image: url("/src/assets/icons/chevrondown.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary2};
    }

    option {
      color: ${({ theme }) => theme.colors.secondary7};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary9};
    }

    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
`;
