import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addItem, PizzaItem } from "../../redux/CartSlice";
export type Prices = {
  [categorie: string]: {
    [size:string]: number
  }
}
const Pizza: React.FC<PizzaItem> = ({ id,prices, imageUrl, name, sizes, count }) => {
  let [sum, setSum] = useState(count)
  let [activeCategory, setActiveCategory] = useState(0)
  let [activeSize, setActiveSize] = useState(0)
  const categories: string[] = ['тонкое', 'традиционное']
  const dispatch = useDispatch()
  const changeSum = (i: any) => {
    setSum(sum + 1)
    const item = {
      id,
      name,
      imageUrl,
      categories: categories[activeCategory],
      price: prices[categories[activeCategory]][sizes[activeSize]],
      sizes: sizes[activeSize],
      count: 1
    }
    dispatch(addItem(item))  
  }
  return (
    <div className="pizza-block">
      <img className="pizza-block__image"
        src={imageUrl}
        alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {categories.map((item, i) => {
            return <li
              onClick={() => { setActiveCategory(i) }}
              className={i === activeCategory ? 'active' : ''}
              key={i}>{item}
            </li>
          })}
        </ul>
        <ul>

          {
            sizes.map((item: any, i:number) => {
              return <li
                onClick={() => { setActiveSize(i) }}
                className={i === activeSize ? 'active' : ''}
                key={i}>{item}
              </li>
            })
          }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{prices[categories[activeCategory]][sizes[activeSize]]} грн</div>
        <div onClick={changeSum} className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white" />
          </svg>
          <span>Добавить</span>
          <i>{sum}</i>
        </div>
      </div>
    </div>
  )
}
export default Pizza
