import styled from "styled-components";

export const Container = styled.div`
  .title {
    margin: 2rem 0 1rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  margin: 24px auto;
  width: 100%;
  max-width: 800px;
`;

export const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryAlpha2};
  border: none;
  width: 64px;
  height: 48px;
  min-height: 44px;
  border-radius: 2px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  backdrop-filter: blur(4px);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAlpha3};
    transform: none;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1322px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 16px;
    justify-items: center;
  }
`;
