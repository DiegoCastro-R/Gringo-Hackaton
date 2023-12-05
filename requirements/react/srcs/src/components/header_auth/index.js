// HeaderComponent.js
import { BorderBox, ButtonsContainer, Header, HeaderContent, Idioma, Logo, Menu, SelectedTab, Tab } from './styles';

import Avatar from '../avatar';
import Button from '../button';
import LogoSvg from '../../assets/logo.svg';
import { colors } from '../../GlobalStyles';
import shopping from '../../assets/icons/shopping.svg'
import useAppContextStore from '../../stores/AppContextStore';
import { useNavigate } from "react-router-dom";

// Avatar component


const HeaderAuthComponent = () => {
    const selectedTab = useAppContextStore((state) => state.selectedTab);
    const updateSelectedTab = useAppContextStore((state) => state.updateSelectedTab);

    // Assume you have a user object with a name
    const user = { name: 'John Doe' };
    const initialLetter = user.name ? user.name[0].toUpperCase() : '';

    // Define your tabs here
    const tabs = [
        { id: 0, label: 'Investimentos', route: '/' },
        { id: 1, label: 'Compras', route: '/foreigner' },
    ];

    const history = useNavigate();
    const handleClick = (index, route) => {
        updateSelectedTab(index);
        history(route);
    };

    return (
        <Header>
            <Logo src={LogoSvg} alt="Logo" onClick={() => { handleClick(0, '/') }} ></Logo>
            <Idioma>{/* You can use language and updateLanguage here */}</Idioma>
            <HeaderContent>
                <Menu>
                    {tabs.map((tab) => (
                        // Render SelectedTab for the selected tab, otherwise render Tab
                        selectedTab === tab.id ? (
                            <SelectedTab key={tab.id} onClick={() => { handleClick(tab.id, tab.route) }} selected={true}>
                                <div style={{ color: colors.textGrey }}>{tab.label}</div>
                            </SelectedTab>
                        ) : (
                            <Tab key={tab.id} onClick={() => { handleClick(tab.id, tab.route) }} selected={false}>
                                <div style={{ color: colors.textGrey }}>{tab.label}</div>
                            </Tab>
                        )
                    ))}
                </Menu>
                <ButtonsContainer>
                    <Button color={colors.white} icon={shopping} handleClick={() => { history('/signup') }}></Button>
                    <BorderBox></BorderBox>

                    <Avatar initial={initialLetter} />
                </ButtonsContainer>
            </HeaderContent>
        </Header>
    );
};

export default HeaderAuthComponent;
