// button/style.js

import styled, { css } from 'styled-components';

const buttonStyles = css`
  font-family: 'Rawline';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0.01563rem;
  height: 36px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
`;

const filledButtonStyles = css`
  ${buttonStyles};
  width: 100%;
  background: ${(props) => props.color || 'blue'}; /* Use the custom color or fallback to a default color */
  color: white;

  &:hover {
    background: ${(props) => props.color || 'darkblue'}; /* Change the background on hover */
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const unfilledButtonStyles = css`
  ${buttonStyles};
  padding: 4px;
  background: none;
  color: white;

  &:hover {
    background: ${(props) => props.color || 'darkblue'}; /* Change the background on hover */
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.div`
  ${(props) => (props.filled ? filledButtonStyles : unfilledButtonStyles)};
`;

const Icon = styled.img`
  width: 16px;
  height: auto;
  margin-right: 8px;
`;

export { Button, Icon };
