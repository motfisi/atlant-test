import './sass/index.scss';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__titles">
        <div className="header__titles__first">
          14 СЕРИЯ СТИРАЛЬНЫХ МАШИН ATLANT
        </div>
        <div className="header__titles__second">INTENSE EXPERT</div>
      </div>
      <div className="header__buttons__container">
        <div className="header__button header__button__design">Дизайн</div>
        <div className="header__button header__button__convenience">
          Удобство
        </div>
        <div className="header__button header__button__reliability">
          Надёжность
        </div>
        <div className="header__button header__button__buy-container">
          <div className="header__button__buy-container__buy">Купить</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
