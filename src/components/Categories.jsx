import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/HomeSlice";
const Categories = ()=>{
  let activeIndex = useSelector((state) => state.home.category);
  let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
  const dispatch = useDispatch()
  const changeCategory = (value)=>{
    dispatch(setCategory(value))
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