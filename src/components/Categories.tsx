import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHome, setCategory } from "../redux/HomeSlice";
const Categories: React.FC = ()=>{
  let activeIndex = useSelector(selectHome).category;
  let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
  const dispatch = useDispatch()
  const changeCategory = (value: number)=>{
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