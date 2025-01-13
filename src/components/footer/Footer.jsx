import './sass/index.scss';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__left">
        <div>
          <span className="footer__text">INTENSE EXPERT</span>
          <span className="footer__left__plk" />
          <span className="footer__text">
            Новая серия стиральных машин ATLANT
          </span>
        </div>
        <div className="footer__sites-container">
          <div className="footer__site footer__site--1" />
          <div className="footer__site footer__site--2" />
          <div className="footer__site footer__site--3" />
          <div className="footer__site footer__site--4" />
          <div className="footer__site footer__site--5" />
          <div className="footer__site footer__site--6" />
        </div>

        <div className="footer__text">
          Copyright 2002-2021 Закрытое акционерное общество “Атлант” Все права
          защищены.
        </div>
      </div>

      <div className="footer__center">
        <div className="footer__text">(17) 203 -71-72, 218-62-09 </div>
        <div className="footer__text">info@atlant.by</div>
        <div className="footer__text">www.atlant.by</div>
      </div>

      <div className="footer__right">
        <div className="footer__right__text-container">
          <span
            className="footer__text"
            onClick={() => scrollToSection('design')}
          >
            Дизайн
          </span>
          <span className="footer__right__plk" />
          <span
            className="footer__text"
            onClick={() => scrollToSection('convenience')}
          >
            Удобство
          </span>
          <span className="footer__right__plk" />
          <span
            className="footer__text"
            onClick={() => scrollToSection('reliability')}
          >
            Надёжность
          </span>
          <span className="footer__right__plk" />
          <span className="footer__text">Купить</span>
        </div>
        <div className="footer__right__logo" />
      </div>
    </div>
  );
};

export default Footer;
