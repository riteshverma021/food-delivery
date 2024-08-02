import React from 'react'
import { assets } from '../../assets/assets'

const Fooditem = (id , name , description , price , image) => {
  return (
  <div className='food-item'>
<img src={image} alt="" />
    
  </div>


  )
}

export default Fooditem