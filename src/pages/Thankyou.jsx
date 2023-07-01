import React from 'react'
import { useNavigate } from 'react-router'
import list from "../assets/images/icon-list.svg"
import success from "../assets/images/icon-success.svg"
import mobile from "../assets/images/illustration-sign-up-mobile.svg"
import desktop from "../assets/images/illustration-sign-up-desktop.svg"


const Thankyou = () => {

const navigate = useNavigate()

  return (
    <div className='flex justify-center items-center bg-dark-slate-grey font-roboto md:p-32 p-0 h-screen'>
      <div className='flex flex-col bg-white md:rounded-2xl rounded-none shadow-md p-10 gap-8 md:w-[450px] w-full h-screen md:h-fit justify-center'>
        <img src={success} alt=""  className='h-12 w-12'/>
        <h1 className='md:text-6xl text-3xl font-bold font-roboto text-dark-slate-grey'>Thanks for <br />subscribing!</h1>
        <p className='font-roboto text-dark-slate-grey text-md'>A confirmation email will be sent to <br /> <span className='font-bold'>ajibadeifedolapo17@gmail.com</span>. Please open it and click the button to confirm your subscription</p>
        <div className='flex justify-end'>
        <button onClick={() => navigate("/")} type='submit' className='bg-dark-slate-grey w-full h-[60px] rounded-md text-white font-roboto font-bold hover:bg-tomato transition duration-300 shadow-lg hover:shadow-lg hover:shadow-tomato' > Dismiss Message </button>
        </div>
        
      </div>
  </div>
  )
}

export default Thankyou