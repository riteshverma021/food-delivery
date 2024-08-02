import { useState } from 'react'
import { Home , Placeholder  ,Cart} from './pages/index'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
function App() {
  const [showlogin, setshowlogin] = useState(false);

  return (
    <>
      {showlogin?<LoginPopup setshowlogin={setshowlogin} />:<></>}
    <div className='app'>
    <Navbar setshowlogin={setshowlogin} />
  <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/placeholder' element ={<Placeholder/>}/>
  </Routes>
 </div>
 <Footer/>
 </>
  )
}

export default App
