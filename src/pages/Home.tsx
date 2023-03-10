import Categories from '../components/Categories';
import React, { useEffect, useRef } from 'react';
import Sceleton from '../components/Pizzablock/Sceletor';
import Pizza from '../components/Pizzablock/Pizza';
import Sort from '../components/Sort';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { fetchPizzas, selectHome, setDescription } from '../redux/HomeSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
const Home:React.FC = () => {
    const navigate = useNavigate()
    let isMount = useRef(false)
    let isSearch = useRef(false)
    const { pizzas, category, activeSort, loading, status, searchValue } = useSelector(selectHome);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setDescription({ ...params }))
            isSearch.current = true
        }
    }, [dispatch])
    useEffect(() => {
        if (!isSearch.current) {
            if (isMount.current) {
                const queryString = qs.stringify({
                    category,
                    sort: activeSort
                })
                navigate(`?${queryString}`)
                // setSceleton(true)
            }
            isMount.current = true
        }
        isSearch.current = false
        dispatch(fetchPizzas([category, activeSort]))
    }, [navigate, dispatch, category, activeSort, searchValue])
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className={status === "error"?"content__error-info":"content__items"}>
                {status === "error"
                    ?<div className='error'>
                        <h2>Виникла помилка при завантаженні піц</h2>
                        <p>Попробуйте пізніше</p>
                    </div>
                    : loading
                        ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
                        : pizzas.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, i) => <Pizza {...item}  key={i} />)
                }


            </div>
        </>
    )
}
export default Home