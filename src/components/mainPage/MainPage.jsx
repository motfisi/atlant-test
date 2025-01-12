import Header from '@components/header/Header';
import Design from '@components/design/Design';

import './sass/index.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-img"></div>
      <Design />
    </>
  );
};

export default MainPage;
