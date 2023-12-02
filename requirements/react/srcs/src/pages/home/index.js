import {
    ContentContainer,
    Description,
    HomeContainer,
    Title,
} from './style';

import Button from '../../components/button';
import React from 'react';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const history = useNavigate();
    return (
        <HomeContainer>
            <ContentContainer>
                <Title>Investimento em tokens do tesouro direto facilitado!</Title>
                <Description>
                    Crie sua conta agora e comece a investir em título tokenizados!
                </Description>
                <div style={{ width: 132, padding: 8 }}>
                    <Button filled handleClick={() => { history('/signup') }}>Abra sua conta</Button>
                </div>
            </ContentContainer>
        </HomeContainer>
    );
};

export default HomePage;
