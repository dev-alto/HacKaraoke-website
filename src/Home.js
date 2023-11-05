import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import {FaDiscord} from 'react-icons/fa'
import Typed from 'react-typed'



const Home = () => {
  return (


    <div className='w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>


        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>


            <h1 className=' w-full text-3xl font-bold text-gray-300 '>The Stat Catz</h1>
            
        </div>


        <div className=' text-[#e7e9ef] max-w-[800px] mt-[150px] mx-auto text-center flex flex-col'>

            <p className='text-3xl sm:text-2xl font-bold p-2 text-[#e7e9ef]'>Your Place to Listen</p>
            <h1 className = "logo text-[#000300] md:text-7xl sm:text-6xl md:py-6 font-bold">
                Karaoke Cat
            </h1>

            <div className='flex justify-center items-center '>
                <p className='text-[#e7e9ef] md:text-4xl sm:text-3xl text-xl font-bold'>Let's Play</p>
                <Typed className = "md:text-4xl sm:text-3xl text-xl font-bold pl-2" strings={['Music','Discord','Song']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            
            <div className='flex items-center'>


                <a href="https://discord.com/api/oauth2/authorize?client_id=1170447650970148894&permissions=8&scope=bot" className='mx-auto my-8'>

                    <button className=' text-white group border-2 px-6 py-3 mx-auto my-0 hover:rounded-[12px] flex items-center hover:bg-[#4681f4] duration-300 hover:border-[#4681f4]'>
                    <FaDiscord size={40}/>

                    <h1 className='text-2xl ml-[5px]'>Play</h1>
                    {/* <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight className='ml-3'/>
                    </span> */}
                    
                    </button>
                </a>
                
            </div>
                
             

        </div>
        

        


    </div>


  )
}

export default Home