import React from 'react'
import group from '../../img/Group 21.png'
import ele from '../../img/electronic-circuit.png'

function Product() {
  return (
    <div>
        {/* section 3  */}
      <section className='flex justify-between mx-auto max-w-6xl items-center  mt-40'>
        {/* class image */}
        <div className=''>
            <img src={group} class="" alt="img"/>
        </div>
        {/* class content */}
        <div className='w-3/6'>
            <div className='flex border-violet-700 rounded-full bg-violet-100 w-52 py-2 cursor-pointer'>
                <img src= {ele} class="w-6 h-6 ml-4" alt="child-img"/>
                <p className='text-violet-700 ml-3 font-medium'>For Product Teams</p>
            </div>
            <h3 className='mt-6 text-4xl font-bold' >Launch with the best stack</h3>
            <p className='mt-6'>A centralized plaform that intergrates zillions of data sources using Big Data ELT (Extrat, Load & Transform)
                that leaves no data behind
            </p>
        </div>
      </section>
    </div>
  )
}

export default Product
