import HomeBg from '../../assets/home-bg.png'
import styled from 'styled-components';
// Container
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${HomeBg});
  background-color: #0C326F;
  background-size: fill;
  
`;


export const ContentContainer = styled.div`
  width: 634px;
  height: 278px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  
`;


export const Title = styled.div`
  color: white;
  font-family: Rawline;
font-size: 3.135rem;
font-style: normal;
font-weight: 500;
line-height: 3.5rem; /* 111.643% */
padding-left: 6px;
`;

export const Description = styled.div`
  color: #FFF;
padding-left: 6px;
padding-top: 20px;
padding-bottom: 20px;
font-feature-settings: 'clig' off, 'liga' off;

font-family: Lato;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: 1.625rem; /* 144.444% */
`;

export const ResponsiveImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 0;
`;



export const ResponsiveStyles = styled.div`
  @media screen and (max-width: 768px) {
    ${HomeContainer} {
      align-items: flex-start;
    }

    ${ContentContainer} {
      width: 100%;
      text-align: left;
      padding: 10px;
    }

    ${Title} {
      font-size: 24px;
      text-align: center;
      margin-bottom: 10px;
    }

    ${Description} {
      font-size: 16px;
      text-align: center;
      margin-bottom: 10px;
    }

    ${ResponsiveImage} {
      position: static;
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    ${ContentContainer} {
      width: 50%; /* Adjust the width for larger screens */
      margin: auto; /* Center the content on larger screens */
      padding: 20px;
    }

    ${Title} {
      font-size: 50px; /* Adjust font size for larger screens */
      text-align: left; /* Align text to the left on larger screens */
    }

    ${Description} {
      font-size: 18px; /* Adjust font size for larger screens */
      text-align: left; /* Align text to the left on larger screens */
    }
  }
`;