import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary1};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryAlpha6};
  padding: 1rem 0;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 160px;
  height: 36px;
  filter: ${({ theme }) => theme.colors.logo.filter};
  transition: filter 0.2s ease-in-out;
`;

export const Title = styled.h2`
  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.secondary12};
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24.2px;
    text-align: center;
  }
`;

export const ThemeToggleButton = styled.button`
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
