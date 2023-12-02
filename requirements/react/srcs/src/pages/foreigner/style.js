import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 25%;
`;

export const ContentContainer = styled.div`
  width: 770px;
  height: 70vh;
  
  position: relative;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 2px rgba(51, 51, 51, 0.38) solid;
  /* padding: 20px; */
  box-sizing: border-box;
  
`;

export const ParaEstrangeirosInvestirText = styled.div`
  color: #333333;
  font-size: 14px;
  font-family: 'Rawline';
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.10px;
  word-wrap: break-word;
  margin-top: 30px;
  span {
    color: #333333;
    font-size: 14px;
    font-family: 'Rawline';
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.10px;
    word-wrap: break-word;
  }

  span.link {
    color: #155BCB;
    text-decoration: underline;
  }
`

export const SouBrasileiroTitle = styled.div`
  color: #333333;
  font-size: 24px;
  font-family: 'Rawline';
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.18px;
  word-wrap: break-word;
  padding-left: 20px;
  margin-top: 30px;
  margin-bottom: 20px;

`

export const TitleContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 64px;
  position: relative;
  border-bottom: 1px #E6E6E6 solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tab = styled.div`
  width: 50%;
  height: 64px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'Rawline';
  font-weight: 600;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1.25px;
  word-wrap: break-word;

  ${(props) =>
    props.selected &&
    `
    border-bottom: 6px #FFC914 solid;
  `}
`;

export const AbrirSuaConta = styled.div`
  left: 23px;
  top: 0;
  position: absolute;
  color: #333333;
  font-size: 24.19px;
  font-family: 'Rawline';
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.18px;
  word-wrap: break-word;
`;


