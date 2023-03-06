import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/HomeSlice";
const Categories = ()=>{
  let [activeIndex, setActiveIndex] = useState(0)
  let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
  const dispatch = useDispatch()
  const changeCategory = (value)=>{
    dispatch(setCategory(value))
    setActiveIndex(value)
  }
    return(
      <div className="categories">
      <ul>
        {
          categories.map((value,i) => <li key={i} className={activeIndex === i?'active':''} onClick={()=>changeCategory(i)}>{value}</li>)
        }
      </ul>
    </div>
    )
}
export default Categories