import style from './App.module.css'

function App() {
  return (
    <div className={style['container-app']}>
      <div className="w-3/4 my-auto ml-20">
        <h1 className="text-5xl font-bold mb-10 hover:text-red-500 text-white">JIT mode is cool</h1>
        <p className="text-white hover:text-red-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia earum ducimus neque obcaecati
          consequuntur ratione accusamus at officiis tempore, magnam non debitis fugit unde alias id quidem
          necessitatibus.
        </p>
      </div>
    </div>
  );
}

export default App;
