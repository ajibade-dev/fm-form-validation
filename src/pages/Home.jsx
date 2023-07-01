import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import list from "../assets/images/icon-list.svg"
import success from "../assets/images/icon-success.svg"
import mobile from "../assets/images/illustration-sign-up-mobile.svg"
import desktop from "../assets/images/illustration-sign-up-desktop.svg"


const Home = () => {

const navigate = useNavigate()


    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 370); // Adjust the breakpoint according to your needs
      };
  
      handleResize(); // Initial check
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    const[noEmail, setNoEmail] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
       e.preventDefault();
       if(noEmail.length === 0 ){
        setError(true)
       }else{
        navigate("./thanks")
      }
       
    }

  

  return (
    <div className='flex justify-center items-center bg-dark-slate-grey font-roboto md:p-32 p-0'>
        <div className='flex md:flex-row flex-col-reverse bg-white rounded-2xl h-full shadow-md items-center'>
            <div className='flex flex-col w-full gap-5 p-16'>
                <h1 className='md:text-6xl text-3xl font-bold font-roboto text-dark-slate-grey'>Stay Updated!</h1>
                <p className='font-roboto text-dark-slate-grey text-md'>Join 60,000 plus product managers receiving monthly updates on:</p>
                {/* line 1 */}
                <div className='flex flex-row gap-3 items-center mt-4'>
                        <img src={success} alt="" className='h-4 w-4'/>
                        <p className='font-roboto text-dark-slate-grey text-md'>Product discovery and building what matters</p>
                </div>

                {/* line 2 */}
                <div className='flex flex-row gap-3 items-center'>
                        <img src={success} alt="" className='h-4 w-4'/>
                        <p className='font-roboto text-dark-slate-grey text-md'>Measuring to ensure updates are a success</p>
                </div>

                {/* line 3 */}
                <div className='flex flex-row gap-3 items-center'>
                        <img src={success} alt="" className='h-4 w-4'/>
                        <p className='font-roboto text-dark-slate-grey text-md'>And much more</p>
                </div>


                {/* for email */}
                  <div className='flex flex-row gap-32'>
                  <p className='font-roboto mt-8 text-dark-slate-grey font-bold'>Email address</p>

                  {error ? <p className='flex justify-end text-red-600 font-roboto font-bold mt-8'>Valid email required</p> : ""}
                  </div>
                

                <form onSubmit={handleSubmit}>
                <input type="email"
                onChange={(e) =>setNoEmail(e.target.value)}
                className='rounded-md border-2 border-gray-400 w-full h-[60px] pl-4'
                placeholder='email@company.com'
                
                />
                {/* for button */}
            
            <button type='submit' className='bg-dark-slate-grey w-full h-[60px] rounded-md mt-8 text-white  font-roboto font-bold  hover:bg-tomato transition duration-300 shadow-lg hover:shadow-lg hover:shadow-tomato' >Subscribe to my monthly newsletter</button>
                </form>
                

            </div>
            <div className='h-full w-full flex md:justify-center justify-center'>
                {setIsSmallScreen ? (
                    <img src={desktop} alt="" />
                ) : (
                    <img src={mobile} alt="" />
                )}
            </div>
        </div>
    </div>
  )
}

export default Home