import React from 'react'
import editbrigtness from '../../../img/edit-brightness.png'
import pcsection1 from '../../../img/image 1.png'

function content() {
  return (
    <div>
        {/* this is i use for body */}
      <section1 className='container mx-auto '>
        <div className='flex mx-auto max-w-6xl items-center  mt-32'>
            {/* content class */}
            <div className='max-w-md max-h-72'>
                <div className='flex text-violet-700 bg-violet-100 border-2 border-violet-100 pl-2 py-1 rounded-full w-60'>
                    <img className="w-4 h-4 mt-1" src={editbrigtness}  alt="edit"/>
                    <p className='pl-3 font-medium text-center'>v3.1 released. <a href='#/'>Learn more</a></p>
                </div>
                <h1 className='mt-5 text-4xl font-bold'>Your data with <br/> real-time analytics  </h1>
                <p className='mt-5'>Harness the potential of Big Data Anaiytics & Cloud Services and become a data-driven organization with Needle tail</p>
                <div className='flex mt-5'>
                    <button type="button" className="border-solid border-2 border-violet-700  rounded-full  px-3  text-white bg-violet-700 py-1 px-5 text-center">Start free trial</button>
                    <a className="ml-9 text-violet-700" href='/#'>Learn more</a>
                </div>
            </div>
            {/* picture  */}
            <div className='max-w-xl max-h-80 ml-52'>
                <img src={pcsection1}  alt="img"/>
            </div>
        </div>
      </section1>
    </div>
  )
}

export default content
