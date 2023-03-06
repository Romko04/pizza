import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import Sceleton from '../components/Pizzablock/Sceletor';
import Pizza from '../components/Pizzablock/Pizza';
import Sort from '../components/Sort';
import { useDispatch, useSelector} from 'react-redux';
// import { store } from '../redux/store';
import { setPizzaz } from '../redux/HomeSlice';
const Home = () => {
    debugger
    const pizzas = useSelector((state) => state.home.pizzas);
    let category = useSelector((state) => state.home.category);                                                                                                                                                                                                                                                                                                             
    let sort = useSelector((state) => state.home.sort);
    const dispatch = useDispatch()
    let [IsSceleton, setSceleton] = useState(true)
    useEffect(() => {
        debugger
        setSceleton(true)
        fetch(`https://6401e590ab6b7399d0af0807.mockapi.io/items?category=${category===0?'':category}&sortBy=${sort}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            .then(res => res.json())
            .then(data => {
                // setPizzas(data)
                dispatch(setPizzaz(data))
                setSceleton(false)
            })
    }, [dispatch, category, sort])
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