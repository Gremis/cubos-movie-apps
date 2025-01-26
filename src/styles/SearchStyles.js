import styled from "styled-components";

export const Container = styled.div`
  .title {
    margin: 24px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};

    span {
      color: ${({ theme }) => theme.colors.secondaryAlpha12};
      text-decoration: none;
      line-height: 19.5px;
      font-weight: 600;
      text-align: center;
      font-size: 16px;
    }
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
  }
`;
