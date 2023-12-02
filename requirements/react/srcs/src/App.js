import { Route, Routes } from "react-router-dom";

import ForeignerPage from "./pages/foreigner";
import HeaderComponent from './components/header'
import { HeaderContainer } from "./components/header/styles";
import Home from './pages/home'

export default function App() {
  return (
    <div>
      <HeaderContainer>
        <HeaderComponent></HeaderComponent>
      </HeaderContainer>
      <Routes>
        <Route path="/" indexelement={<Home />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<ForeignerPage />}></Route>
          <Route path="foreigner" element={<ForeignerPage />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}