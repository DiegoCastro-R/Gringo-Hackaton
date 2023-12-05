import { Route, Routes } from "react-router-dom";

import BuyPage from "./pages/buy";
import ForeignerPage from "./pages/foreigner";
import HeaderAuthComponent from "./components/header_auth";
import HeaderComponent from './components/header'
import { HeaderContainer } from "./components/header/styles";
import Home from './pages/home'
import useAuthStore from "./stores/AuthContextStore";

export default function App() {
  const { isLoggedIn } = useAuthStore();

  return (
    <div>
      <HeaderContainer>
        {isLoggedIn ? <HeaderAuthComponent /> : <HeaderComponent />}
        {/* <HeaderAuthComponent /> */}
      </HeaderContainer>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route index element={<Home />} />
        <Route path="signup" element={<ForeignerPage />} />
        <Route path="foreigner" element={<ForeignerPage />} />
        {/* <Route path="*" element={<NoMatch />} /> */}

      </Routes>
    </div >
  );
}