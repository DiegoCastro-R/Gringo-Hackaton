import styled from 'styled-components';

const AvatarContainer = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
`;

const AvatarBackground = styled.div`
  width: 42px;
  height: 42px;
  left: 0;
  top: 0;
  position: absolute;
  background: #0C326F;
  border-radius: 50%;
`;

const AvatarText = styled.div`
  left: 14px;
  top: 7px;
  position: absolute;
  color: white !important;
  font-size: 24.19px;
  font-family: 'Rawline';
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.18px;
  word-wrap: break-word;
`;

export { AvatarContainer, AvatarBackground, AvatarText }