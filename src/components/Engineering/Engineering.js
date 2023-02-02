import React from 'react'
import imageEngi from '../../img/image 6.png'
import compass from '../../img/compass.png'

function Engineering() {
  return (
    <div>
        {/* section 4  */}
      <section className='flex justify-between mx-auto max-w-6xl items-center  mt-40'>
        
        {/* class content */}
        <div className='w-3/6'>
            <div className='flex border-violet-700 rounded-full bg-violet-100 w-60 py-2 cursor-pointer'>
                <img src= {compass} class="w-6 h-6 ml-4" alt="child-img"/>
                <p className='text-violet-700 ml-3 font-medium'>For Engineering Teams</p>
            </div>
            <h3 className='mt-6 text-3xl font-bold' >Data-driven pipelines in minutes</h3>
            <p className='mt-6'>Maintenace-free data pipelines with quik set-up and straight-forward deployments that are 
            powered by modern & scalable plafrom
            </p>
        </div>
        {/* class image */}
        <div className=''>
            <img src={imageEngi} class="" alt="img"/>
        </div>
      </section>
    </div>
  )
}

export default Engineering
