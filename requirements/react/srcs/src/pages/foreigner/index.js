import {
    AbrirSuaConta,
    ContentContainer,
    MainContainer,
    MenuContainer,
    ParaEstrangeirosInvestirText,
    SouBrasileiroTitle,
    Tab,
    TitleContainer,
} from './style';
import { useEffect, useState } from 'react';

import Button from '../../components/button';
import GovBr from '../../assets/govbr.svg';
import SVG from 'react-inlinesvg';
import { useLocation } from 'react-router-dom';

const ForeignerPage = () => {
    const [selectedTab, setSelectedTab] = useState('souEstrangeiro');

    const location = useLocation();

    useEffect(() => {
        // Check if the path is 'signup', then set the selected tab to 'souBrasileiro'
        if (location.pathname === '/signup') {
            setSelectedTab('souBrasileiro');
        } else {
            setSelectedTab('souEstrangeiro');
        }
    }, [location.pathname]);
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="AbrirContaSouEstrangeiro">
            <TitleContainer>
                <AbrirSuaConta>Abrir sua conta</AbrirSuaConta>
            </TitleContainer>

            <MainContainer>
                <ContentContainer>
                    <MenuContainer>
                        <Tab onClick={() => handleTabClick('souBrasileiro')} selected={selectedTab === 'souBrasileiro'}>
                            <div className="SouBrasileiro">sou brasileiro</div>
                        </Tab>
                        <Tab onClick={() => handleTabClick('souEstrangeiro')} selected={selectedTab === 'souEstrangeiro'}>
                            <div className="SouEstrangeiro">sou estrangeiro</div>
                        </Tab>
                    </MenuContainer>
                    <div style={{ padding: '30px' }}>
                        {selectedTab === 'souEstrangeiro' && (
                            <ParaEstrangeirosInvestirText>
                                Para estrangeiros investirem no tesouro direto é necessário criar um CPF, para isso, são necessários alguns passos, como acessar o site da receita e preencher o formulário.
                                É possível acessar o site da receita, clicando aqui.

                                Os documentos necessários para criação do CPF, são:
                                Comprovante de identidade e a nacionalidade do interessado, como: nome dos pais, naturalidade e data de nascimento;
                                Título de Eleitor (para brasileiros com idade entre 18 e 70 anos) ou Documento da Justiça Eleitoral, atestando a impossibilidade ou a inexistência de obrigatoriedade de alistamento eleitoral.
                                Qualquer dúvida é possível retirar através do site do Tribunal Superior Eleitoral, clicando aqui.
                            </ParaEstrangeirosInvestirText>
                        )}

                        {selectedTab === 'souBrasileiro' && (
                            <>
                                <SouBrasileiroTitle>
                                    Para continuar, crie ou acesse sua conta no
                                </SouBrasileiroTitle>
                                <SVG src={GovBr} width={178} height={48} />
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: -80 }}>
                                    <div>
                                        <input type="checkbox" style={{ marginRight: '10px' }} />
                                        <span style={{ color: '#333333', fontSize: 14, fontFamily: 'Rawline', fontWeight: '500', lineHeight: 20, letterSpacing: 0.25 }}>
                                            Li e concordo com o tratamento de dados pessoais conforme estabelecido no
                                        </span>
                                        <div style={{ marginTop: -130, marginLeft: 26, marginBottom: 20 }}>
                                            <span style={{ color: '#216E1F', fontSize: 14, fontFamily: 'Rawline', fontWeight: '700' }}>
                                                Termo de Consentimento para Tratamento de Dados Pessoais - Cadastro Simplificado Tesouro Direto
                                            </span>
                                        </div>
                                    </div>
                                </div>





                                <div style={{ width: 191, height: 36, background: '#1351B4', borderRadius: 19 }}>
                                    <Button filled>Entrar com GOV.BR</Button>
                                </div>

                            </>
                        )}

                    </div>

                </ContentContainer>
            </MainContainer>
        </div >
    );
};

export default ForeignerPage;
