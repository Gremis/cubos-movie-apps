import styled from "styled-components";

export const MoviePage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
box-sizing: border-box;

@media (max-width: 768px) {
  padding: 0;
}
`;

export const LoadingErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:${({ theme }) => theme.colors.secondary3};
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 20px;
`;

export const Poster = styled.img`
width: 354.51px;
height: 542px;
max-width: 400px;
border-radius: 4px;
margin: 0 0 32px 32px;

@media (max-width: 768px) {
  margin: 0;
}
`;

export const Details = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
justify-content: space-between;
align-items: center;
margin-top: -35px;
margin-bottom: -30px;
width: 100%;

h1 {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  line-height: 39.01px;
  font-weight: 600;
  text-align: left;
  color: #EEEEF0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #EEEEF0;
  margin-bottom: 5px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: #EEEEF0;
}

p:first-of-type {
  font-style: normal; 
}

p:nth-of-type(2) {
  font-style: italic;
  margin-top: 19px;
}

@media (max-width: 900px) {
  flex-direction: column;
}
`;

export const Info = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;

> div:nth-child(1),
> div:nth-child(2) {
  background-color: ${({ theme }) => theme.colors.secondary3};
  padding: 10px;
  border-radius: 4px;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryAlpha11};
  margin-bottom: 5px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryAlpha12};
}

@media (max-width: 768px) {
  justify-content: center;
  gap: 16px;

  > div:nth-child(1),
> div:nth-child(2) {
  padding: 16px;
}
}
`;

export const InfoRelease = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
align-items: center;
justify-items: start;

div {
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary3};
  padding: 16px;
  border-radius: 4px;
  width: 100%;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryAlpha11};
  margin: 0;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryAlpha12};
  margin: 0;
}
`;

export const Genres = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryAlpha11};
  margin-bottom: 8px;
}

div {
  display: flex; 
  gap: 8px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary12};
  background-color: ${({ theme }) => theme.colors.primaryAlpha3};
  padding: 8px;
  border-radius: 2px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}
`;

export const ProgressCircle = styled.div`
position: relative;
width: 160px;
height: 160px;
top: -30px;

svg {
  width: 100%;
  height: 100%;
  transform: rotate(-120deg);
}

.background, .circle {
  stroke: ${({ theme }) => theme.colors.secondaryAlpha4};
  stroke-width: 7;
  fill: none;
}

.background {
  stroke: ${({ theme }) => theme.colors.secondaryAlpha4};
}

.circle {
  stroke-dasharray: 314;
  stroke-dashoffset: ${({ percentage }) =>
  314 - (percentage / 100) * 314};
  stroke: ${({ theme }) => theme.colors.warning};
  fill: none;
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


export const Overview = styled.div`
background-color: ${({ theme }) => theme.colors.secondary3};
border-radius: 4px;
padding: 16px;
width: 417px;
height: 300px;
margin-bottom: 16px;

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryAlpha11};
  margin-bottom: 5px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondaryAlpha12};
}

@media (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;

export const TrailerContainer = styled.div`
  width: 100%;
  max-width: 1238px;
  height: 647px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: flex-start;  
  margin: 20px auto;
  padding: 0 20px; 

  h1 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    color: #EEEEF0;
    width: 100%; 
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondaryAlpha11}; 
    line-height: 1.5;
    text-align: left;
    margin: 10px 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary3};
    padding: 10px;
    border-radius: 4px;
  }

@media (max-width: 768px) {
  height: 400px; 
  padding: 20px;
}
`;

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
margin: 32px 0;
max-width: 1302px;
width: 100%;
background-color: ${({ theme }) => theme.colors.secondaryAlpha3};
border-radius: 4px;
background-size: cover;

@media (max-width: 1300px) {
  grid-template-columns: 1fr;
  margin: 0;
}
`;

export const PosterSection = styled.div`
display: flex;
justify-content: center;
margin: 32px 0;

`;

export const DetailsSection = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 32px 32px;

`;

export const DetailsOverview = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 20px;
width: 100%;
@media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
}
`;

export const OverviewSection = styled.div`
flex: 1;

@media (max-width: 1000px) {
  place-items: center 
}
`;

export const GenresSection = styled.div`
background-color: ${({ theme }) => theme.colors.secondary3};
border-radius: 4px;
padding: 16px;
width: auto;
height: auto;

@media (max-width: 768px) {
  width: 100%;
}
`;

export const ReleaseInfoSection = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
flex: 1;
width: 390px;
`;

export const FinancialInfoSection = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
align-items: center;
justify-items: start;

div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.secondary3};
padding: 16px;
border-radius: 4px;
width: 120px;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryAlpha11};
  margin: 0;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryAlpha12};
  margin: 0;
}
`;