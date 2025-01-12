import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTER_ROUTES } from '@constants';
import MainPage from '@components/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER_ROUTES.ROOT} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
