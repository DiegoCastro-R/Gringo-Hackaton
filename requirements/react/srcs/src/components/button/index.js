// button/index.js

import { Button as StyledButton, Icon as StyledIcon } from './style';

import React from 'react';

const Button = ({ filled, icon, children, handleClick, color }) => {
    return (
        <StyledButton filled={filled} onClick={() => handleClick()} color={color}>
            {icon && <StyledIcon src={icon} alt="Icon" />}
            {children}
        </StyledButton>
    );
};

export default Button;
