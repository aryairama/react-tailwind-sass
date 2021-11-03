import style from './App.module.scss';

function App() {
  return (
    <div className={style['container-app']}>
      <div className={style['container-app-layout']}>
        <h1 className={style['text-heading']}>JIT mode is cool</h1>
        <p className={style['text-description']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia earum ducimus neque obcaecati
          consequuntur ratione accusamus at officiis tempore, magnam non debitis fugit unde alias id quidem
          necessitatibus.
        </p>
        <button className={style['btn-red']}>Jos</button>
        <ul className={style['mixin-menu-1']}>
          <li>menu 1</li>
          <li>menu 2</li>
          <li>menu 3</li>
          <li>menu 4</li>
          <li>menu 5</li>
        </ul>
        <ul className={style['mixin-menu-2']}>
          <li>menu 1</li>
          <li>menu 2</li>
          <li>menu 3</li>
          <li>menu 4</li>
          <li>menu 5</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
