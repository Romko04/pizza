import './scss/app.scss'
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import { useEffect, useState } from 'react';
import Sceleton from './components/Pizzablock/Sceletor';
import Pizza from './components/Pizzablock/Pizza';
import Sort from './components/Sort';

function App() {
  debugger
  let [pizzas, setPizzas] = useState([])
  let [IsSceleton, setSceleton] = useState(true)
  console.log(IsSceleton);
  useEffect(()=>{
    fetch('https://6401e590ab6b7399d0af0807.mockapi.io/items')
      .then(res => res.json())
      .then(data => {
        setPizzas(data)
        setSceleton(false)
      })
  },[])
  return (
     <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {pizzas.map((item, i )=> !IsSceleton? <Sceleton/>:<Pizza {...item} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
