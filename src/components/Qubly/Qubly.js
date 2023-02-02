import React from 'react'
import eye from '../../img/Icon awesome-eye.png'
import chartbar from '../../img/chart-bar-33.png'
import newletter from '../../img/newsletter-dev.png'
import timeline from '../../img/timeline.png'

function Qubly() {
  return (
    <div>
        {/* contetn in section 2 */}
      <section className='mx-auto max-w-6xl items-center  mt-60'>
        <div className='text-center'>
            <div className=' cursor-pointer mx-auto w-36 py-1 flex text-center items-center justify-center bg-violet-100 border-2 border-violet-100 rounded-full '>
                <img src={eye} className='mr-3 ' alt=""/>
                <p className='font-medium text-violet-700'>Why Qubly</p>
            </div>
            <h1 className='mt-6 text-4xl font-bold'>Get actionable insights from Big Data in 3 steps</h1>
            <p className='mx-auto mt-6 w-3/5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took.
            </p>
        </div>
        {/* chart bar  */}
        <div className='flex items-center mt-6 '>
            <div className='text-center w-2/5  p-6'>
                <img src={chartbar} className='mx-auto' alt=""/>
                <h3 className='mt-4 font-bold '>Valuable business insights</h3>
                <p className='mt-4'>Collect processed & cleansed data that is ready to be analyzed to gather valuable busince insights</p>
            </div>
            <div className='text-center w-2/5 p-6' >
                <img src={newletter} className='mx-auto' alt=""/>
                <h3 className='mt-4 font-bold '>Powerful Algorithms</h3>
                <p className='mt-4'>With the help of powerful algorithms, quanlity rules & techniques, obtain simplified & enrinched data</p>
            </div>
            <div className='text-center w-2/5 p-6'>
                <img src={timeline}className='mx-auto' alt=""/>
                <h3 className='mt-4 font-bold '>Data in real-time</h3>
                <p className='mt-4'>Collect data in real-time from multiple channels and move it into a data lake, in its original format. </p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Qubly
