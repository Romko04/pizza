import React, { useState } from "react";
const Categories = ()=>{
  let [activeIndex, setActiveIndex] = useState(0)
  let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]
  const changeActive = (value)=>{
    setActiveIndex(value)
  }
    return(
      <div class="categories">
      <ul>
        {
          categories.map((value,i) => <li key={i} className={activeIndex === i&& 'active'} onClick={()=>changeActive(i)}>{value}</li>)
        }
        {/* <li class="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
      </ul>
    </div>
    )
}
export default Categories