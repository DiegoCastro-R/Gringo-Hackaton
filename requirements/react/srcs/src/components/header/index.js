// HeaderComponent.js
import { BorderBox, ButtonsContainer, Header, HeaderContent, Idioma, Logo, Menu, SelectedTab, Tab } from './styles';

import Button from '../button';
import LockSvg from '../../assets/icons/lock.svg';
import LogoSvg from '../../assets/logo.svg';
import { colors } from '../../GlobalStyles';
import useAppContextStore from '../../stores/AppContextStore';
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    // const language = useAppContextStore((state) => state.language);
    const selectedTab = useAppContextStore((state) => state.selectedTab);
    const updateSelectedTab = useAppContextStore((state) => state.updateSelectedTab);

    // Define your tabs here
    const tabs = [
        { id: 0, label: 'Home', route: '/' },
        { id: 1, label: 'Sou estrangeiro', route: '/foreigner' },


    ];

    const history = useNavigate();
    const handleClick = (index, route) => {
        updateSelectedTab(index);
        history(route);
    };
    return (
        <Header>
            <Logo src={LogoSvg} alt="Logo" onClick={() => { handleClick(0, '/') }} > </Logo>
            <Idioma>{/* You can use language and updateLanguage here */}</Idioma>
            <HeaderContent>
                <Menu>
                    {tabs.map((tab) => (
                        // Render SelectedTab for the selected tab, otherwise render Tab
                        selectedTab === tab.id ? (
                            <SelectedTab key={tab.id} onClick={() => { handleClick(tab.id, tab.route) }} selected={true}>
                                <div>{tab.label}</div>
                            </SelectedTab>
                        ) : (
                            <Tab key={tab.id} onClick={() => { handleClick(tab.id, tab.route) }} selected={false}>
                                <div>{tab.label}</div>
                            </Tab>
                        )
                    ))}
                </Menu>
                <ButtonsContainer>
                    <Button color={colors.buttonBackground} filled handleClick={() => { history('/signup') }}>
                        <div className="Content" >
                            <div className="Label">Abra sua conta</div>
                        </div>
                    </Button>
                    <BorderBox></BorderBox>
                    <Button icon={LockSvg} handleClick={() => { }}>
                        <div className="Content">
                            <div className="Label">Login</div>
                        </div>
                    </Button>
                </ButtonsContainer>
            </HeaderContent>
        </Header>
    );
};

export default HeaderComponent;
