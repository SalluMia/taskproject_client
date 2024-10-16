import React from 'react'
import runninglady from '../assets/bannerImages/running-lady.png'
import sneaker from '../assets/sneakersImages/sneaker4.png';
export default function Banner() {
  return (
    <div>

         <div className='flex gap-2 my-2'>
            {/* leftBanner  */}
        <div className=' w-2/5 rounded-xl  ' id='left-banner'>

           <div className='flex justify-center items-center overflow-hidden'>
               <div className='w-2/3 h-full justify-center overflow-hidden  flex relative'>
                  <img src={sneaker} className='w-[84%] z-10' alt=""  />
                  <div id='main-bannerImageOverlay' className='ml-32'></div>
               </div>

               <div className='w-2/3 px-10'>
                    <h1 className='text-5xl text-white uppercase font-bold my-4'>Essential Items for</h1>
                    <button className='text-white text-4xl px-3 py-2 bg-[#89089F] rounded-md font-bold'>$99</button>
                    <p className='py-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button className='bg-white rounded-lg uppercase text-xs font-semibold px-3 py-2 text-black'>Add to cart</button>
               </div>
           </div>
        </div>

            {/* rightbanner */}
            <div className='w-2/5 h-[350px] bg-gray-200 relative rounded-xl overflow-hidden'>
    <img src={runninglady} className=' h-[70%] mt-24' alt="" />
    <div className='absolute right-6 bottom-[20%]'>
        <div className='flex justify-start items-center'>
            <h1 className='text-6xl font-semibold' id='fifty'>50</h1>
            <div>
                <h1 className='text-4xl font-bold'>%</h1>
                <p className='text-3xl uppercase font-semibold'>off</p>
            </div>
        </div>
        <hr className='h-1 bg-black my-2'/>
        <p className='text-2xl font-bold uppercase'>Running Kit</p>
    </div>
</div>

         </div>
    </div>
  )
}
