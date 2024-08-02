import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app' >
<p>For better Experience Download <br/>  Tomato App </p>
<div className="platforms">
<img src={assets.play_store} alt="" />
<img src={assets.app_store} alt="" />


</div>



    </div>
  )
}

export default AppDownload