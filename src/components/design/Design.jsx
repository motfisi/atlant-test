import './sass/index.scss';

const Design = () => {
  return (
    <>
      <div className="design__container">
        <div className="design__text1">ДИЗАЙН И ИННОВАЦИИ</div>
        <div className="design__text2">
          Стиль и технологии обрели форму в новых стиральных машинах. Приборы
          оснащены усовершенствованными программами и функциями, которые
          позволяют достичь высоких результатов стирки, затрачивая минимум
          времени и сил.
        </div>
      </div>
      <div className="design__img">
        <div className="design__machine-img"></div>
        <div className="design__img__text-container">
          <div className="design__img__text1">ЭЛЕГАНТНЫЙ ДИЗАЙН</div>
          <div className="design__img__text2">
            Новая модель стиральной машины отличается плавным и утончённым
            дизайном, привносящим изысканные нотки в стиль дома.
          </div>
        </div>
      </div>
      <div className="design__cards-container">
        <div className="design__card">
          <div className="design__card__img design__card__img--1"></div>
          <div className="design__card__text1">Очистка барабана</div>
          <div className="design__card__text2">
            Поддержание внутренних частей стиральной машины в чистоте,
            предотвращает появление неприятных запахов.
          </div>
        </div>
        <div className="design__card">
          <div className="design__card__img design__card__img--2"></div>
          <div className="design__card__text1">Программа «Любимая»</div>
          <div className="design__card__text2">
            Позволяет записывать и сохранять в памяти стиральной машины
            понравившуюся программу.
          </div>
        </div>
        <div className="design__card">
          <div className="design__card__img design__card__img--3"></div>
          <div className="design__card__text1">
            Энергоэффективность класса А+++
          </div>
          <div className="design__card__text2">
            Экономит электроэнергию и оплату счетов за электричество.
          </div>
        </div>
        <div className="design__card">
          <div className="design__card__img design__card__img--4"></div>
          <div className="design__card__text1">Защита от детей</div>
          <div className="design__card__text2">
            Активировав опцию, кнопки управления блокируются, поэтому дети не
            смогут вмешиваться в ход стирки.
          </div>
        </div>
        <div className="design__card">
          <div className="design__card__img design__card__img--5"></div>
          <div className="design__card__text1">Smart Balance Control</div>
          <div className="design__card__text2">
            Система электронного контроля дисбаланса обеспечивает стабильную
            работу машины без повышенных вибраций и шума.
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
