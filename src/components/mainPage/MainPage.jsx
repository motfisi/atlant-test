import Header from '@components/header/Header';
import Design from '@components/design/Design';
import Convenience from '@components/convenience/Convenience';
import Reliability from '@components/reliability/Reliability';

import './sass/index.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-img"></div>
      <Design />
      <Convenience />
      <Reliability />
    </>
  );
};

export default MainPage;
