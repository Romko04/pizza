import Categories from '../components/Categories';
import React, { useEffect, useRef, useState } from 'react';
import Sceleton from '../components/Pizzablock/Sceletor';
import Pizza from '../components/Pizzablock/Pizza';
import Sort from '../components/Sort';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { setDescription, setPizzaz } from '../redux/HomeSlice';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    let isMount = useRef(false)
    let isSearch = useRef(false)
    const {pizzas,category,sort} = useSelector((state) => state.home);
    let searchValue = useSelector((state) => state.home.searchValue);
    const dispatch = useDispatch()
    let [IsSceleton, setSceleton] = useState(true)
    useEffect(()=>{
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setDescription({...params}))
            isSearch.current = true
        }
    },[dispatch])
    useEffect(() => {
        if (!isSearch.current) {
            if (isMount.current) {
                const queryString = qs.stringify({
                    category,
                    sort
                })
                navigate(`?${queryString}`)
                setSceleton(true)
            }
            isMount.current = true
            fetch(`https://6401e590ab6b7399d0af0807.mockapi.io/items?category=${category === 0 ? '' : category}&sortBy=${sort}`)
                .then(res => res.json())
                .then(data => {
                    // setPizzas(data)
                    dispatch(setPizzaz(data))
                    setSceleton(false)
                })
        }
        isSearch.current = false
    }, [navigate,dispatch, category, sort, searchValue])
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
                    : pizzas.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, i) => <Pizza {...item} key={i} />)
                }
            </div>
        </>
    )
}
export default Home