import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import Sceleton from '../components/Pizzablock/Sceletor';
import Pizza from '../components/Pizzablock/Pizza';
import Sort from '../components/Sort';
const Home = () => {
    let [pizzas, setPizzas] = useState([])
    let [IsSceleton, setSceleton] = useState(true)
    useEffect(() => {
        fetch('https://6401e590ab6b7399d0af0807.mockapi.io/items')
            .then(res => res.json())
            .then(data => {
                setPizzas(data)
                setSceleton(false)
            })
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {IsSceleton
                    ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
                    : pizzas.map((item, i) => <Pizza {...item} key={i} />)
                }
            </div>
        </>
    )
}
export default Home