import React ,{useState}from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setshowlogin}) => {
  const [currentState, setcurrentState] = useState("SignUp");
  return (
    <div className='login'>
      <form className='login-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img  onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='inputs'>
          {currentState === 'SignUp'? <input type="text" placeholder='name' required />:""}
         
          <input type="email" placeholder='email' required />
          <input type="password" placeholder='password' required />
      </div>
      <button> {currentState === "login"?"Log In":"Create Account"}  </button>
      <div className="login-conditions">
        <input type="checkbox" name="" id="" />
        <p>By continuing, I agree to the terms of use and privacy policy </p>
      </div>
      {currentState === 'login'?  <p>Create new Account ? <span  onClick={()=>setcurrentState('SignUp')} > Click Here</span>  </p>: <p>Already have an account ? <span onClick={()=>setcurrentState('login')} > Log in</span></p>}
    
      </form>
    </div>
  )
}

export default LoginPopup