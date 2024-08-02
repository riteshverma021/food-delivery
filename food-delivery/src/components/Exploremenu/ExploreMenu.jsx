import React from 'react'
import { menu_list } from '../../assets/assets'
import './Explore.css'
const ExploreMenu = ({category , setcategory}) => {
  return (
    <div className='explore-menu'  id='explore-menu'>
         <h1>Explore Our Menu</h1>
         <p className='explore-menu-text'>Choose from diverse menu featuring a a delectable array of dishes.Our mission is to satisfy our craving and elevate your dining experience , one delicious meal at a time. </p>
         <div className='menu-list'>
            {menu_list.map((item,index)=>{
             return( <div className='menu-item' onClick={()=>setcategory(prev=>prev ===item.menu_name ? 'All':item.menu_name)} key={index} >   
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
                
                 </div>)
            })}
         </div>
<hr />
    </div>
  )
}

export default ExploreMenu