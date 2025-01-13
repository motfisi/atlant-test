import './sass/index.scss';

const Convenience = () => {
  return (
    <>
      <div className="convenience__container">
        <div className="convenience__text1">Удобство</div>
        <div className="convenience__text2">
          Стиральная машина серии{' '}
          <span className="convenience__text2__bold">Intense Expert</span>{' '}
          станет универсальным решением для вашей семьи. Новая стиральная машина{' '}
          <span className="convenience__text2__bold">гарантирует</span>{' '}
          эффективность стирки{' '}
          <span className="convenience__text2__bold">до 7,5 кг.</span>
        </div>
      </div>
      <div className="convenience__img" />
      <div className="convenience__card">
        <div className="convenience__card__img convenience__card__img--1" />
        <div className="convenience__card__text-container">
          <div className="convenience__card__text1">БЕРЕЖНАЯ СТИРКА</div>
          <div className="convenience__card__text2">
            Оригинальная конструкция и специальная поверхность барабана
            обеспечивает бережный уход даже самым привередливым тканям.
          </div>
        </div>
      </div>

      <div className="convenience__card">
        <div className="convenience__card__img convenience__card__img--2" />
        <div className="convenience__card__text-container">
          <div className="convenience__card__text1">ЭРГОНОМИЧНАЯ РУЧКА</div>
          <div className="convenience__card__text2">
            Ручка-клавиша расположена с внешней стороны дверцы для максимально
            удобного открывания двери.
          </div>
        </div>
      </div>

      <div className="convenience__card">
        <div className="convenience__card__img convenience__card__img--3" />
        <div className="convenience__card__text-container">
          <div className="convenience__card__text1">ТОЧНАЯ ДОЗИРОВКА</div>
          <div className="convenience__card__text2">
            Позвольте стиральной машине дозировать нужное количество моющего
            средства. Увеличенный лоток имеет удобную ручку с выступающей для
            захвата частью с рифлением с внутренней стороны.
          </div>
        </div>
      </div>

      <div className="convenience__card">
        <div className="convenience__card__img convenience__card__img--4" />
        <div className="convenience__card__text-container">
          <div className="convenience__card__text1">ИНТУИТИВНОЕ УПРАВЛЕНИЕ</div>
          <div className="convenience__card__text2">
            Сенсорная панель управления и светодиодный дисплей позволяют легким
            касанием, установить нужный режим работы, а затем следить за всеми
            этапами выполнения цикла, а также гармонично дополняет безупречный
            облик машины.
          </div>
        </div>
      </div>
    </>
  );
};

export default Convenience;
