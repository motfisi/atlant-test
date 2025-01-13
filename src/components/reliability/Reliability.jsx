import './sass/index.scss';

const Reliability = () => {
  return (
    <>
      <div className="reliability__container">
        <div className="reliability__block1" />
        <div className="reliability__block2">
          <div className="reliability__block2__text1">НАДЁЖНАЯ ЗАЩИТА</div>
          <div className="reliability__block2__text2">
            <span className="reliability__block2__text2__bold">
              Простые и эффективные
            </span>{' '}
            системы{' '}
            <span className="reliability__block2__text2__bold">
              «Aqua-Stop»
            </span>{' '}
            и{' '}
            <span className="reliability__block2__text2__bold">
              «Aqua-Protect»
            </span>{' '}
            в стиральной машине делают эксплуатацию максимально{' '}
            <span className="reliability__block2__text2__bold">
              комфортной и безопасной, предотвращая
            </span>{' '}
            неприятные последствия от случайного протекания воды.
          </div>
        </div>
      </div>

      <div className="load__container">
        <div className="load__text1">ДОЗАГРУЗКА БЕЛЬЯ</div>
        <div className="load__text2">
          Добавляйте вещи во время стирки с функцией «Дозагрузки белья» Нажав на
          кнопку «Старт/Пауза» и подождав 3 секунды, можно легко добавить в
          барабан носки, платочки, футболку или другую вещь, вовремя не
          загруженную в стиральную машину.
        </div>
      </div>

      <div className="load__img" />
    </>
  );
};

export default Reliability;
