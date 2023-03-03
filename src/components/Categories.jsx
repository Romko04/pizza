import React, { useState } from "react";
const Categories = ()=>{
  let [activeIndex, setActiveIndex] = useState(0)
  let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
  const changeActive = (value)=>{
    setActiveIndex(value)
  }
    return(
      <div className="categories">
      <ul>
        {
          categories.map((value,i) => <li key={i} className={activeIndex === i?'active':''} onClick={()=>changeActive(i)}>{value}</li>)
        }
      </ul>
    </div>
    )
}
export default Categories