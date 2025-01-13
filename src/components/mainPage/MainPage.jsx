import Header from '@components/header/Header';
import Design from '@components/design/Design';
import Convenience from '@components/convenience/Convenience';
import Reliability from '@components/reliability/Reliability';
import Footer from '@components/footer/Footer';

import './sass/index.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-img"></div>
      <div id="design">
        <Design />
      </div>
      <div id="convenience">
        <Convenience />
      </div>
      <div id="reliability">
        <Reliability />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
