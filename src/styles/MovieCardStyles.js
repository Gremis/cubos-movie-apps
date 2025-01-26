import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.secondaryAlpha4};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const ProgressCircle = styled.div`
  position: relative;
  width: 160px;
  top: -100px;
  height: 160px;
  opacity: 0; 
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    top: 65%;
    left: 45%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
    border-radius: 40%;
    backdrop-filter: blur(3px);
    z-index: -1;
  }
  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-120deg);
  }
  .background, .circle {
    stroke-width: 7;
    fill: none;
  }
  .background {
    stroke: ${({ theme }) => theme.colors.secondaryAlpha4};
  }
  .circle {
    stroke-dasharray: 314;
    stroke-dashoffset: ${({ percentage }) => 314 - (percentage / 100) * 314};
    stroke: ${({ theme }) => theme.colors.warning};
    transition: stroke-dashoffset 0.3s ease-in-out;
  }
  .percentage {
    position: absolute;
    top: 65%;
    left: 48%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.warning};
    font-size: 24px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    span {
      color: #FFFF;
      font-size: 14px;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
    }
  }
`;

export const Genres = styled.div`
  margin-top: 15px;
  visibility: hidden; 
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 2;
  color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  line-height: 1.2;
  font-weight: 400;
  text-transform: capitalize;
  text-align: left; 
`;

export const Title = styled.div`
  margin-top: 0.5rem;
  color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 19.5px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left; 
  z-index: 2;
`;

export const CardContainer = styled.div`
  width: 235px;
  height: 355px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0) 80%
    );
    z-index: 1;
  }

  &:hover ${Content}, &:hover ${ProgressCircle}, &:hover ${Genres} {
    transform: translateY(-10px);
    opacity: 1;
    visibility: visible;
    z-index: 2;
  }
`;
