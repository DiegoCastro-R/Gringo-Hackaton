import SVG from "react-inlinesvg";
import { colors } from '../../GlobalStyles';
import styled from 'styled-components';

// Header
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
`;




const Header = styled.div`
  width: 100%;
  height: 64px;
  position: relative;
  overflow: hidden; 
  background: ${colors.white};

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 20px 0; /* Add padding for small displays */
  }
`;

const Logo = styled(SVG)`
  width: 160px;
  height: auto;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const Idioma = styled.div`
  width: 86px;
  height: 34px;
  left: 209px;
  top: 15px;
  position: absolute;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end; /* Corrected from "end" */
  align-items: center;
`;

const Menu = styled.div`
  height: 64px;
  background: ${colors.white};
  border-bottom: 1px #071D41 solid;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  color: ${colors.textGrey};
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background: ${colors.white}; /* Match header background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    gap: 10px;
  }
`;
const Tab = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; /* Add transitions for background, transform, and box-shadow */
  color: ${colors.textGrey};
  &:hover {
    background: white;
    border-radius: 10%;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  > div {
    color: white;
    font-size: 16.8px;
    font-family: 'Rawline';
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.50px;
    word-wrap: break-word;
  }
`;

const SelectedTab = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; 
  
  &:hover {
    background: white;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  > div {
    color: white;
    font-size: 16.8px;
    font-family: 'Rawline';
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.50px;
    word-wrap: break-word;
    
  }
  border-bottom: ${colors.accent} 4px solid  ;

`;

const BorderBox = styled.div`
  width: 64px;
  height: 0;
  transform: rotate(-90deg);
  border: 0.01px #1B1B1B solid;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;


const Icon = styled(SVG)`
  width: 16px;
  height: auto;
  margin-right: 8px;
`;

const ButtonsContainer = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    margin: 20px 0; /* Add margin for small displays */
  }
`;

export { Header, Logo, Idioma, HeaderContent, Menu, Tab, Icon, ButtonsContainer, SelectedTab, BorderBox };
