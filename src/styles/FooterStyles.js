import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryAlpha6};

  p {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 19.5px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryAlpha11};

    a {
      color: ${({ theme }) => theme.colors.secondaryAlpha11};
      text-decoration: none;
      line-height: 19.5px;
      font-weight: 400;
      text-align: center;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
