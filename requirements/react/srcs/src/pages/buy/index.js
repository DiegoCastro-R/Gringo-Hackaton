import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';

import { BuyContainer } from './style';
import { Icon } from '../../components/button/style';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100vw - 250px); /* Adjusted width to accommodate the sidebar */
  height: calc(100vh - 64px);
  background: red;
  position: absolute;
  left: 250px; /* Width of the Sidebar */
  top: 64px ;
`;


const Box = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  position: absolute;
`;

const WhiteBox = styled(Box)`
  background: white;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const ShadowedBox = styled(WhiteBox)`
  border: 1px rgba(51, 51, 51, 0.38) solid;
`;

const BlueBox = styled(Box)`
  background: #1351B4;
  color: white;
`;

const GreenBox = styled(Box)`
  background: #168821;
`;

const RedBox = styled(Box)`
  background: #88163F;
  color: #88163F;
`;

const GrayBox = styled(Box)`
  background: #F8F8F8;
`;

const Title = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: Rawline;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  word-wrap: break-word;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap}px;
`;

const Text = styled.div`
  text-align: center;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: Rawline;
  font-weight: ${({ fontWeight }) => fontWeight};
  word-wrap: break-word;
`;


const BuyPage = () => {
    return (
        <>
            <Sidebar style={{ marginTop: '64px', height: 'calc(100vh - 64px)' }}>
                <Menu>
                    <MenuItem>Comprar</MenuItem>
                    <MenuItem>Minhas Compras</MenuItem>
                </Menu>
            </Sidebar>
            <Container>


            </Container>
        </>
    );
};
export default BuyPage;
